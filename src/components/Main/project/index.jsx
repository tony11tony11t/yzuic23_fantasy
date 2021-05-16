import React, { Component } from 'react'
import './index.css'
import SubnavBar from '../../SubnavBar'
import Title from '../../Title'
import Works from './Works'
import Content from './Content'
import Data from '../../../data.json';
import { v4 as uuidv4 } from "uuid"

export default class WebProject extends Component {
    state = {
        contentVisible : false,
        contentIndex   : null,
        project : []
    }

    subNavBarItems = [{
        name : "all",
        label : "全部作品"
    },{
        name : "interactive",
        label : "互動裝置類"
    },{
        name : "game",
        label : "遊戲類"
    },{
        name : "movie",
        label : "影視動畫類"
    },{
        name : "marketing",
        label : "行銷企劃類"
    }]

    componentDidMount = () => {
        this.setState({project : Data.project})
    }

    showContent = index => {
        this.setState({
            contentVisible : true,
            contentIndex   : index - 1
        });
    }
    hideContent = () => this.setState({contentVisible : false});

    changePage = (name) => {
        let getProjects = () => {
            switch(name){
                case "interactive" :
                    return Data.project.map(info => info.Category === "互動裝置類" ? info : null)
                case "game" :
                    return Data.project.map(info => info.Category === "遊戲類" ? info : null)
                case "movie" :
                    return Data.project.map(info => info.Category === "影視動畫類" ? info : null)
                case "marketing" :
                    return Data.project.map(info => info.Category === "行銷企劃類" ? info : null)
                case "all" :
                    return Data.project;
            }
        }
        this.setState({project : getProjects()}) 
    }
    
    render() {
        const {contentVisible , contentIndex , project} = this.state;

        return (
            <div>
                <Title chinese="展覽作品" english="Project" theme="light"/>
                <div className="subNavWrapper">
                    <SubnavBar data={this.subNavBarItems} changePage={this.changePage} theme="light"/>
                </div>
                <div className="projectWrapper">
                    {project.map((obj , i) => obj ? <Works show={this.showContent} index = {i + 1}/> : null)}
                </div>
                {contentVisible ? <Content close={this.hideContent} index={contentIndex}/> : null}
            </div>
        )
    }
}
