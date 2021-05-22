import React, { Component } from 'react'
import Data from '../../../../data.json';
import styled , {keyframes} from 'styled-components';
import Member from './Member'
import { v4 as uuidv4 } from "uuid"
import {Cancel , IframeContainer} from '../../../../theme/templete'

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
            <ProjectContentWrapper>
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
            </ProjectContentWrapper> 
        )
    }
}

const contentShow = keyframes`
    from{
        top     : 30%;
        opacity : 0;
    }
    to{
        top     : 0;
        opacity : 1;
    }
`

const ProjectContentWrapper = styled.div`
    position            : fixed;
    width               : 100%;
    height              : 100%;
    top                 : 0;
    left                : 0;
    z-index             : ${({theme}) => theme.zIndex.higher};
    background-color    : ${({theme}) => theme.colors.black};
    overflow            : auto;
    animation-name      : ${contentShow};
    animation-duration  : .6s;
`


const ProjectContent = styled.div`
    max-width           : 980px;
    margin              : auto;
    margin-top          : 40px;
    margin-bottom       : 40px;
    padding             : 0 ${({theme}) => theme.page.padding}px;

    @media ${({theme}) => theme.mediaQueries.bellow1100} {
        margin-top      : 80px;
    }

    h1{
        font-size       : ${({theme}) => theme.fontSize.h1}px;
        color           : ${({theme}) => theme.colors.white};
        margin-bottom   : 20px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.h1}px;
        }
    }

    h3{
        font-size       : ${({theme}) => theme.fontSize.h3}px;
        color           : ${({theme}) => theme.colors.white};
        line-height     : ${({theme}) => theme.fontSize.h3}px;
        margin-bottom   : 20px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.h3}px;
            line-height     : ${({theme}) => theme.fontSize.bellow980.h3 * 1.5}px;
        }
    }

    h4{
        font-size       : ${({theme}) => theme.fontSize.h4}px;
        color           : ${({theme}) => theme.colors.white};
        padding-bottom  : .8rem;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.h4}px;
        }
    }

    h5{
        font-size       : ${({theme}) => theme.fontSize.h5}px;
        color           : ${({theme}) => theme.colors.white};
        padding-bottom  : .8rem;



        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.h5}px;
            line-height     : ${({theme}) => theme.fontSize.bellow980.h5 * 1.5}px;
        }
    }

    p{
        color           : ${({theme}) => theme.colors.white};
        font-size       : ${({theme}) => theme.fontSize.p}px;
        line-height     : ${({theme}) => theme.fontSize.p * 1.5}px;
        margin-bottom   : 30px;
        letter-spacing  : 1px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.p}px;
            line-height     : ${({theme}) => theme.fontSize.bellow980.p * 1.5}px;
        }
    }

    img{
        width           : 100%;
        margin-bottom   : 20px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin-bottom   : 10px;
        }
    }
` 

const ProjectIntro = styled.div`
    display             : flex;
    align-content       : flex-start;
    margin              : 1rem 0 2rem;

    .left{
        display         : flex;
        flex-direction  : column;
        flex            : 1;
    }

    .right{
        flex            : 2.5;
        margin-left     : 40px;
        position        : relative;
    }
`

const ProjectTeacher = styled.div`
    display         : ${({device}) => (device == (window.innerWidth > 980 ? "laptop" : "mobile") ? "flex" : "none")};
    flex-direction  : column;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex-direction  : row;
        justify-content : flex-end;
    }

    h5{
        border-bottom   : solid 1px ${({theme}) => theme.colors.white};
        text-align      : center;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            border-bottom  : none;
            border-right   : solid 1px ${({theme}) => theme.colors.white};
            padding         : 0 8px;
        }

        &:last-of-type{
            padding-top     : 16px;
            border-bottom   : none;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                border-right   : none;
                padding : 0 8px;
            }
        }
    }
`

const ProjectMemberContainer = styled.div`
    display     : flex;
    flex-wrap   : wrap;
    margin-top  : 1rem;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        margin-top  : 0;
    }
`
