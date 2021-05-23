import React, { Component } from 'react'
import WebIndex from './components/pages/index'
import WebStory from './components/pages/story'
import WebTeam from './components/pages/team'
import WebProject from './components/pages/project'
import WebRecord from './components/pages/record'
import WebResult from './components/pages/result'
import Navbar   from './components/Navbar'
import {AppWrapper , ContainerWrapper} from './App.style'
import {Route , Redirect , Switch , withRouter} from 'react-router-dom'

class App extends Component {
  state = {
    page : "index", // "index" | "story" | "team" | "project"
    width : null
  }

  constructor(props){
    super(props);
    this.wrapper = React.createRef();

    const {pathname} = this.props.location;
    this.state = {page : pathname.substring(1)}
  }

  componentDidMount  = () => {
    window.addEventListener("resize" , () => {
        this.setState({width : window.innerWidth})
    });
  }

  componentDidUpdate(prevProps) {
    const {pathname} = this.props.location;
    if (pathname !== prevProps.location.pathname) {
        this.wrapper.current.scrollTop = 0;
        this.setState({page : pathname.substring(1) });
    }
}


  render() {
    const {page} = this.state;
    
    return (
        <AppWrapper>
            <Navbar changePage = {this.changePage}/>
            <ContainerWrapper ref   = {this.wrapper}
                              bgUrl = {`${process.env.PUBLIC_URL}/asset/bg_${page}.png`}>
                <Switch>
                    <Route path="/index"    component={WebIndex} />
                    <Route path="/story"    component={WebStory} />
                    <Route path="/team"     component={WebTeam} />
                    <Route path="/project"  component={WebProject} />
                    <Route path="/record"   component={WebRecord} />
                    <Route path="/result"   component={WebResult} />
                    <Redirect to="/index" />
                </Switch>
            </ContainerWrapper>
        </AppWrapper>
    )
  } 
}

export default withRouter(App);


