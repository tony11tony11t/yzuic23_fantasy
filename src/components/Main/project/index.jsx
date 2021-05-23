import React, { Component } from 'react'
import SubnavBar from '../../SubnavBar'
import MobileSubnavBar from '../../MobileSubnavBar'
import Works from './Works'
import Content from './Content'
import data from '../../../data.json';
import styled from 'styled-components';
import { v4 as uuidv4 } from "uuid"
import {Wrapper} from '../../../theme/templete'

export default class WebProject extends Component {
    state = {
        contentVisible : false,
        contentIndex   : null,
        project         : []
    }

    componentDidMount = () => {
        this.setState({project : data.project})
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
                    return data.project.map(info => info.Category === "互動裝置類" ? info : null)
                case "game" :
                    return data.project.map(info => info.Category === "遊戲類" ? info : null)
                case "movie" :
                    return data.project.map(info => info.Category === "影視動畫類" ? info : null)
                case "marketing" :
                    return data.project.map(info => info.Category === "行銷企劃類" ? info : null)
                case "all" :
                    return data.project;
            }
        }
        this.setState({project : getProjects()}) 
    }
    
    render() {
        const {contentVisible , contentIndex , project} = this.state;
        const {projectSubNavBarItems} = data;

        return (
            <Wrapper>
                <SubnavBar  data        = {projectSubNavBarItems} 
                            changePage  = {this.changePage}
                            width       = {62}/>
                <MobileSubnavBar  data         = {projectSubNavBarItems} 
                                  changePage   = {this.changePage}/>

                <ProjectContainer>
                    {project.map((obj , i) => obj ? 
                        <Works show  = {this.showContent} 
                               index = {i + 1}
                               key   = {uuidv4()}/> : 
                        null)}
                </ProjectContainer>

                {contentVisible ? <Content close = {this.hideContent} index = {contentIndex}/> : null}
            </Wrapper>
        )
    }
}

const ProjectContainer = styled.div`
    width               : 95%;
    max-width           : 1700px;
    margin              : auto;
    background-color    : ${({theme}) => theme.colors.white};
    padding             : 54px 50px;
    border-radius       : 50px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding         : 30px 26px;
        border-radius   : 26px;
    }
`