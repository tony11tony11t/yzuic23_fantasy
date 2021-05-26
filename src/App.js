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
        loadingPercent  : 10,
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
                console.log(img.src);
                img.onload  = resolve(i);
                img.onerror = reject();
            });
        });

        let partPercent = 100 / promise.length;

        if(partPercent < 100 && partPercent > 0){
            for(let i = 0 ; i < promise.length ; i++){
                await promise[i].then(index => {
                    console.log(partPercent * (index + 1));
                    this.setState({loadingPercent : partPercent * (index + 1)});
                });
            }
        }else{
            this.setState({loadingPercent :100});
        }

        
    }

    componentDidMount  = () => {
        window.addEventListener("resize" , () => {
            this.setState({width : window.innerWidth})
        });

        this.RouteListener();
    }

    RouteListener = (prevProps) => {
        const {pathname} = this.props.location;
        if (prevProps == null || pathname !== prevProps.location.pathname) {
            this.wrapper.current.scrollTop = 0;
            let name = pathname.split("/")[1];
            name = name == "/" || name == "" ? "index" : name;

            this.setState({
                page            : name,
                loadingPercent  : 10
            });

            this.catchImages(data.Image[name]);
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
                
                <LoadingContainer percent = {loadingPercent}>
                    <img src={`${process.env.PUBLIC_URL}/asset/loading.gif`} />
                    <div className="loadingBarBorder"></div>
                </LoadingContainer>
            </ContainerWrapper>
        </AppWrapper>
    )
  } 
}

export default withRouter(App);


