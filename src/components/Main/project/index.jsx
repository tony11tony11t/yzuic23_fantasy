import React, { Component } from 'react'
import SubnavBar from '../../SubnavBar'
import Works from './Works'
import Content from './Content'
import Data from '../../../data.json';
import styled from 'styled-components';
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
            <ProjectWrapper>
                <div className="subNavbarWrapper">
                    <SubnavBar  data        = {this.subNavBarItems} 
                                changePage  = {this.changePage}/>
                </div>

                <ProjectContainer>
                    {project.map((obj , i) => obj ? <Works show={this.showContent} index = {i + 1}/> : null)}
                </ProjectContainer>

                {contentVisible ? <Content close={this.hideContent} index={contentIndex}/> : null}
            </ProjectWrapper>
        )
    }
}

const ProjectWrapper = styled.div`
    margin-top: 2rem;

    .subNavbarWrapper{
        width: 100%;
        max-width: 980px;
        margin : 0 2.5%;
    }
`

const ProjectContainer = styled.div`
    width: 95%;
    max-width: 1700px;
    margin : auto;
    background-color: #fff;
    padding: 2.7rem 2.5rem;
    border-radius: 2.5rem;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding: 1.5rem 1.3rem;
        border-radius: 1.3rem;
    }
`