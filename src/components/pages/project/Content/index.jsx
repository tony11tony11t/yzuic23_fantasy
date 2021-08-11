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
    goBack = () => this.props.match.history.goBack();
    
    render() {
        const {project} = Data;
        const {index : i} = this.props.match.match.params;
        let index = parseInt(i);
        const {Title , Tag , Intro , Content , Teacher , Video , Members} = project[index - 1];
        return (
            <FixedContentWrapper>
                <Cancel onClick = {this.goBack}/>
                <ProjectContent>
                    <h1>{Title}</h1>
                    <h3>{Tag}</h3>
                    <img src={`${process.env.PUBLIC_URL}/asset/project/project${index}_img1.jpg`} className="master"/>
                    <ProjectIntro device = {"laptop"}>
                        <div className="ProjectContainer">
                            <div className="left">
                                <img src={`${process.env.PUBLIC_URL}/asset/project/project${index}_img2.jpg`}/>
                            </div>
                            <div className="right">
                                <h4>設計理念</h4>
                                <p>{Intro}</p>
                                <h4>作品介紹</h4>
                                <p>{Content}</p> 
                            </div>
                        </div>
                        <div className="ProjectContainer">
                            <div className="left">
                                <img src={`${process.env.PUBLIC_URL}/asset/project/project${index}_img3.jpg`}/>
                                <ProjectTeacher>
                                    <h5>指導老師</h5>
                                    <h5>{Teacher.join("、")}</h5>
                                </ProjectTeacher>
                            </div>
                            <div className="right">
                                {
                                    Video != "" ?
                                        <IframeContainer device = {"laptop"}>
                                            <iframe src={Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </IframeContainer> :
                                        null
                                }
                            </div>
                        </div>
                    </ProjectIntro>

                    <ProjectIntro device = {"mobile"}>
                        <h4>設計理念</h4>
                        <p>{Intro}</p>
                        <img src={`${process.env.PUBLIC_URL}/asset/project/project${index}_img2.jpg`}/>
                        <h4>作品介紹</h4>
                        <p>{Content}</p>
                        <img src={`${process.env.PUBLIC_URL}/asset/project/project${index}_img3.jpg`}/>
                        {
                            Video != "" ?
                                <IframeContainer device = {"mobile"}>
                                    <iframe src={Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </IframeContainer> :
                                null
                        }
                        <ProjectTeacher>
                            <h5>指導老師</h5>
                            <h5>{Teacher.join("、")}</h5>
                        </ProjectTeacher>
                    </ProjectIntro>
                    
                    
                    <h4>製作團隊</h4>
                    <ProjectMemberContainer length = {Members.length}>
                        {
                            Members.map((m , i , arr) => {
                                return (
                                    <Member key          = {uuidv4()}
                                            memberInfo   = {m}
                                            projectIndex = {index - 1}
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
