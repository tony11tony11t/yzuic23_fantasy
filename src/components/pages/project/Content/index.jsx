import React, { Component }     from 'react'
import Data                     from '../../../../data.json';
import Member                   from './Member'
import { v4 as uuidv4 }         from "uuid"
import {Cancel , 
        IframeContainer , 
        FixedContentWrapper}    from '../../../../theme/templete'
import {ProjectContent , 
        ProjectIntro , 
        ProjectTeacher , 
        ProjectMemberContainer} from './index.style'

export default class Content extends Component {

    getMemberFlexWidth = (length , i) => {
        if(window.innerWidth > 980){
            if(length < 7){
                return 100 / 6;
            }else if(length == 7){
                return 25;
            }else{
                return 20;
            }
        }else{
            return 50;
        }
    }
    
    render() {
        const {project} = Data;
        const {close , index} = this.props;
        return (
            <FixedContentWrapper>
                <Cancel onClick = {close}/>
                <ProjectContent>
                    <h1>{project[index].Title}</h1>
                    <h3>{project[index].Tag}</h3>
                    <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img1.jpg`} className="master"/>
                    <ProjectIntro device = {"laptop"}>
                        <div className="left">
                            <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img2.jpg`}/>
                            <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img3.jpg`}/>
                            <ProjectTeacher>
                                <h5>指導老師</h5>
                                <h5>{project[index].Teacher.join("、")}</h5>
                            </ProjectTeacher>
                        </div>
                        <div className="right">
                            <h4>設計理念</h4>
                            <p>{project[index].Intro}</p>
                            <h4>作品介紹</h4>
                            <p>{project[index].Content}</p>
                            {/*<IframeContainer device = {"laptop"}>
                                <iframe src="https://www.youtube.com/watch?v=AGAzT90lg08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </IframeContainer>*/}
                        </div>
                    </ProjectIntro>

                    <ProjectIntro device = {"mobile"}>
                        <h4>設計理念</h4>
                        <p>{project[index].Intro}</p>
                        <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img2.jpg`}/>
                        <h4>作品介紹</h4>
                        <p>{project[index].Content}</p>
                        <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img3.jpg`}/>
                        {/*<IframeContainer device = {"mobile"}>
                            <iframe src={project[index].Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </IframeContainer>*/}
                        <ProjectTeacher>
                            <h5>指導老師</h5>
                            <h5>{project[index].Teacher.join("、")}</h5>
                        </ProjectTeacher>
                    </ProjectIntro>
                    
                    
                    <h4>製作團隊</h4>
                    <ProjectMemberContainer length = {project[index].Members.length}>
                        {
                            project[index].Members.map((m , i , arr) => {
                                return (
                                    <Member key          = {uuidv4()}
                                            memberInfo   = {m}
                                            projectIndex = {index}
                                            i            = {i}
                                            flexW        = {this.getMemberFlexWidth(arr.length , i)} />
                                )
                            })
                        }
                    </ProjectMemberContainer>
                </ProjectContent>
            </FixedContentWrapper> 
        )
    }
}
