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
            return length > 7 || length < 5 ? 20 : (100 / length);
        }else{
            return 33.3333;
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
                    <ProjectIntro>
                        <div className="left">
                            <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img2.jpg`}/>
                            <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img3.jpg`}/>
                            <ProjectTeacher device = {"laptop"}>
                                <h5>指導老師</h5>
                                <h5>{project[index].Teacher.join("、")}</h5>
                            </ProjectTeacher>
                        </div>
                        <div className="right">
                            <h4>設計理念</h4>
                            <p>{project[index].Intro}</p>
                            <h4>作品介紹</h4>
                            <p>{project[index].Content}</p>
                            <IframeContainer device = {"laptop"}>
                                <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </IframeContainer>
                            <ProjectTeacher device = {"mobile"}>
                                <h5>指導老師</h5>
                                <h5>{project[index].Teacher.join("、")}</h5>
                            </ProjectTeacher>
                        </div>
                    </ProjectIntro>
                    <IframeContainer device = {"mobile"}>
                        <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </IframeContainer>
                    <h4>製作團隊</h4>
                    <ProjectMemberContainer>
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
