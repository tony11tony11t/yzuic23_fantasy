import React, { Component } from 'react'
import WebIndex from '../src/components/Main/index'
import WebStory from '../src/components/Main/story'
import WebTeam from '../src/components/Main/team'
import WebProject from '../src/components/Main/project'
import WebRecord from './components/Main/record'
import Navbar   from '../src/components/Navbar'
import FixedBar   from '../src/components/FixedBar'

import './App.css'

export default class App extends Component {
  state = {
    page : "project" // "index" | "story" | "team" | "project"
  }

  constructor(props){
    super(props);
    this.wrapper = React.createRef();
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
      default:break;
    }
  }

  render() {
    const {page} = this.state;
    return (
      <div className="appWrapper" style={{backgroundImage : `url('./asset/bg_${page}.png')`}}>
        <Navbar changePage = {this.changePage}/>
        <div className="containerWrapper" ref={this.wrapper}>
          {this.getPage()}
        </div>
        <FixedBar changePage = {this.changePage}/>
      </div>
    )
  }
}

