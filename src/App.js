import React, { Component } from 'react'
import WebIndex from './components/pages/index'
import WebStory from './components/pages/story'
import WebTeam from './components/pages/team'
import WebProject from './components/pages/project'
import WebRecord from './components/pages/record'
import WebResult from './components/pages/result'
import Navbar   from './components/Navbar'
import data from './data.json'
import {AppWrapper , ContainerWrapper , LoadingContainer} from './App.style'
import {Route , Redirect , Switch , withRouter} from 'react-router-dom'

class App extends Component {
    state = {
        page            : "index", // "index" | "story" | "team" | "project"
        loadingPercent  : 0,
        width           : null
    }

    IntervalFunc = null;

    constructor(props){
        super(props);
        this.wrapper = React.createRef();

        const {pathname} = this.props.location;
        this.state = {
            page            : pathname.substring(1),
            loadingPercent  : 0,
            width           : null
        }
    }

    catchImages = async (srcArray) => {
        
        const promise = await srcArray.map((src , i) =>{
            return new Promise((resolve , reject) => {
                
                const img = new Image();

                img.src = `${process.env.PUBLIC_URL}/asset/${src}`;
                img.onload  = resolve.bind(this , i);
                img.onerror = reject.bind(this);

            });
        });

        let partPercent = 100 / promise.length;
    
        for(let p of promise){
            p.then(_=> {
                const {loadingPercent} = this.state;
                let nowPercent = loadingPercent + partPercent;
                this.setState({loadingPercent : nowPercent <= 100 ? nowPercent : 100});
            });
        }
    }

    catchVideo = async (srcArray) => {
        const promise = await srcArray.map((src , i) =>{
            return new Promise((resolve , reject) => {
                
                const video = document.createElement("video");

                video.src = `${process.env.PUBLIC_URL}/asset/${src}`;
                video.oncanplay  = resolve.bind(this , i);
            });
        });

        for(let p of promise){
            p.then(_=> {
                this.setState({loadingPercent :100});
            });
        }
    }

    componentDidMount  = () => {
        window.addEventListener("resize" , () => {
            this.setState({width : window.innerWidth})
        });

        this.RouteListener();

        //if sometning wrong , set time limit enter website
        setTimeout(() => {
            this.setState({loadingPercent  : 100});
        } , 20000)
    }

    RouteListener = (prevProps) => {
        const {pathname} = this.props.location;

        if (prevProps == null || !(pathname.includes(prevProps.location.pathname) || prevProps.location.pathname.includes(pathname))) {
            let name = pathname.split("/")[1];
                name = name == "/" || name == "" ? "index" : name;
            this.wrapper.current.scrollTop = 0;
            this.setState({
                page            : name,
                loadingPercent  : 0
            });
            if(name == "index"){
                this.catchVideo(data.Image[name]);
            }else
                this.catchImages([...data.Image[name] , ...data.Image.general]);
        }
    }

    componentDidUpdate(prevProps) {
        this.RouteListener(prevProps)
    }

    componentWillUnmount = () => {
        window.removeEventListener("load" , this.handleLoad)
    }


  render() {
    const {page , loadingPercent} = this.state;
    
    return (
        <AppWrapper>
            <Navbar changePage = {this.changePage}/>
            <ContainerWrapper ref         = {this.wrapper}
                              bgUrl       = {`${process.env.PUBLIC_URL}/asset/bg_${page}.png`}
                              mobileBgUrl = {`${process.env.PUBLIC_URL}/asset/bg_bellow980_${page}.png`}>
                <Switch>
                    <Route path={`/index`}    component={WebIndex} />
                    <Route path={`/story`}    component={WebStory} />
                    <Route path={`/team`}     component={WebTeam} />
                    <Route path={`/project`}  component={WebProject} />
                    <Route path={`/record`}   component={WebRecord} />
                    <Route path={`/result`}   component={WebResult} />
                    <Redirect to={`/index`} />
                </Switch>
                
                <LoadingContainer percent = {Math.ceil(loadingPercent)}>
                    <img src={`${process.env.PUBLIC_URL}/asset/loading.gif`} />
                    <div className="loadingBarBorder"></div>
                </LoadingContainer>
            </ContainerWrapper>
        </AppWrapper>
    )
  } 
}

export default withRouter(App);


