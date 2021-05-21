import React, { Component } from 'react'
import WebIndex from '../src/components/Main/index'
import WebStory from '../src/components/Main/story'
import WebTeam from '../src/components/Main/team'
import WebProject from '../src/components/Main/project'
import WebRecord from './components/Main/record'
import WebResult from './components/Main/result'
import Navbar   from '../src/components/Navbar'
import {AppWrapper , ContainerWrapper} from './App.style'

export default class App extends Component {
  state = {
    page : "index", // "index" | "story" | "team" | "project"
    width : null
  }

  constructor(props){
    super(props);
    this.wrapper = React.createRef();
  }

  componentDidMount  = () => {
    window.addEventListener("resize" , () => {
        this.setState({width : window.innerWidth})
    })
  }

  changePage = (page) => {
    this.wrapper.current.scrollTop = 0;
    this.setState({page : page});
  }

  getPage = () => {
    switch(this.state.page){
      case "index" : 
        return <WebIndex />    
      case "story" : 
        return <WebStory />
      case "team" : 
        return <WebTeam />
      case "project" :
        return <WebProject />
      case "record" :
        return <WebRecord />
      case "result" :
        return <WebResult />
      default:break;
    }
  }

  render() {
    const {page} = this.state;
    
    return (
      <AppWrapper>
        <Navbar changePage = {this.changePage}/>
        <ContainerWrapper ref   = {this.wrapper}
                          bgUrl = {`${process.env.PUBLIC_URL}/asset/bg_${page}.png`}>
          {this.getPage()}
        </ContainerWrapper>
      </AppWrapper>
    )
  } 
}


