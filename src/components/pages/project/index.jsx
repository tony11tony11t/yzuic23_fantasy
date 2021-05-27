import React, { Component }     from 'react'
import { v4 as uuidv4 }         from "uuid"
import SubNavBar                from '../../SubNavBar'
import Works                    from './Works'
import Content                  from './Content'
import data                     from '../../../data.json';
import {Wrapper}                from '../../../theme/templete'
import {ProjectContainer}       from './index.style'
import {Route , Switch , Redirect}        from 'react-router-dom'

export default class WebProject extends Component {
    state = {
        project         : []
    }

    componentDidMount = () => {
        this.setState({project : data.project});
    }

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
        const {project} = this.state;
        const {projectSubNavBarItems} = data;

        return (
            <Wrapper>
                <SubNavBar  data        = {projectSubNavBarItems} 
                            changePage  = {this.changePage}
                            width       = {62}/>

                <ProjectContainer>
                    {project.map((obj , i) => obj ? 
                        <Works index = {i + 1}
                               info  = {obj}
                               key   = {uuidv4()}/> : 
                        null)}
                </ProjectContainer>

                <Switch>
                    <Route  path     = {`/project/:index`}
                            children = {(match) => (
                                <Content match = {match}/>
                            )} />
                </Switch>
            </Wrapper>
        )
    }
}