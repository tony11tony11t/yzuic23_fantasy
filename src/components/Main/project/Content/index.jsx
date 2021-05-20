import React, { Component } from 'react'
import Data from '../../../../data.json';
import styled , {keyframes} from 'styled-components';
import Member from './Member'
import { v4 as uuidv4 } from "uuid"

export default class Content extends Component {
    
    render() {
        const {project} = Data;
        const {close , index} = this.props;
        return (
            <ProjectContentWrapper>
                <Cancel onClick = {close}/>
                <ProjectContent>
                    <ProjectTitle>
                        <h1>{project[index].Title}</h1>
                        <h2>{project[index].Tag}</h2>
                    </ProjectTitle>
                    <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img1.jpg`} className="master"/>
                    <ProjectIntro>
                        <div className="left">
                            <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img2.jpg`}/>
                            <img src={`${process.env.PUBLIC_URL}/asset/project/project${index + 1}_img3.jpg`}/>
                            <h3>指導老師</h3>
                            <h4>{project[index].Teacher.join("、")}</h4>
                        </div>
                        <div className="right">
                            <h3>設計理念</h3>
                            <p>{project[index].Intro}</p>
                            <h3>作品介紹</h3>
                            <p>{project[index].Content}</p>
                            <IframeContainer>
                                <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </IframeContainer>
                        </div>
                    </ProjectIntro>
                    <h3>製作團隊</h3>
                    <ProjectMemberContainer>
                        {
                            project[index].Members.map((m , i , arr) => {
                                let flexW = arr.length > 7 || arr.length < 5 ? 20 : (100 / arr.length);
                                return (
                                    <Member memberInfo   = {m}
                                            projectIndex = {index}
                                            i            = {i}
                                            flexW        = {flexW} />
                                )
                            })
                        }
                    </ProjectMemberContainer>
                </ProjectContent>
            </ProjectContentWrapper> 
        )
    }
}

const Cancel = styled.div`

    position: fixed;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #000;
    height: 4rem;
    cursor: pointer;
    z-index: 10;

    &::before{
        content: "";
        width: 40px;
        height: 3px;
        display: block;
        position: absolute;
        top : 2rem;
        right : 2rem;
        background-color: #fff;
        transform: rotate(45deg);
    }
    &::after{
        content: "";
        width: 40px;
        height: 3px;
        display: block;
        position: absolute;
        top : 2rem;
        right : 2rem;
        background-color: #fff;
        transform: rotate(-45deg);
    }
`

const contentShow = keyframes`

    from{
        top : 30%;
        opacity: 0;
    }
    to{
        top : 0;
        opacity: 1;
    }
`


const ProjectContentWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #000;
    overflow: auto;
    animation-name: ${contentShow};
    animation-duration: .6s;
`


const ProjectContent = styled.div`
    max-width: 980px;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 2rem;
    padding : 0 2rem;

    h3{
        color : #fff;
        text-align: left;
        margin-bottom: .8rem;
    }

    .master{
        width: 100%;
    }
` 

const ProjectTitle = styled.div`

    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    h1{
        font-size: 2rem;
        color : #fff;
        margin : 0;
        line-height: 2.5rem;
    }

    h2{
        font-size: 1.5rem;
        color : #fff;
        margin : 0;
        line-height: 2rem;
    }
`

const ProjectIntro = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;

    .left{
        display: flex;
        flex-direction: column;
        flex: 2;

        img{
            width: 100%;
            margin-top: 1rem;
        }

        h3{
            border-bottom: #fff solid 1px;
            text-align: center;
            padding-bottom: .8rem;
        }

        h4{
            color : #fff;
            margin : 0;
            text-align: center;
        }
    }
    .right{
        flex: 5;
        margin: 0 0 0 2rem;
        position: relative;

        p{
            color: #fff;
            flex: 2;
            margin-top: 0;
            margin-bottom: 1.5rem;
            font-size: .8rem;
            line-height: 1.3rem;
        }
    }
`

const IframeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    padding-bottom: 56.25%;

    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const ProjectMemberContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
`
