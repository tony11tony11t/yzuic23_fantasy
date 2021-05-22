import React, { Component } from 'react'
import styled from 'styled-components'

export default class WebIndex extends Component {
    render() {
        return (
            <IndexContainer>
                <h1>元智大學 資訊傳播學系<br/>第二十三屆畢業展</h1>
                <h2>YZU Information  Communication<br/>The  23rd Graduation  Exhibition</h2>
                <video src={`${process.env.PUBLIC_URL}/asset/bg_index_video.mp4`} muted autoPlay loop playsinline/>
                <Mask />
            </IndexContainer>
        )
    }
}

const IndexContainer = styled.div`
    display         : flex;
    flex-direction  : column;
    padding         : ${({theme}) => theme.page.padding}px 0;
    
    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding     : ${({theme}) => theme.page.bellow980.padding}px 0;
    }

    video{
        position    : absolute;
        top         : 0;
        left        : 0;
        width       : 100%;
        height      : 100%;
        object-fit  : cover;
        z-index     : ${({theme}) => theme.zIndex.lowest};
    }

    h1{
        z-index         : ${({theme}) => theme.zIndex.medium};
        color           : ${({theme}) => theme.colors.white};
        font-size       : ${({theme}) => theme.fontSize.title}px;
        line-height     : ${({theme}) => theme.fontSize.title * 1.5}px;
        font-weight     : 500;
        margin-bottom   : 10px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size   : ${({theme}) => theme.fontSize.bellow980.title}px;;
            line-height : ${({theme}) => theme.fontSize.bellow980.title * 1.5}px;
        }
    }

    h2{
        z-index         : ${({theme}) => theme.zIndex.medium};
        color           : ${({theme}) => theme.colors.white};
        font-size       : ${({theme}) => theme.fontSize.subTitle}px;
        line-height     : ${({theme}) => theme.fontSize.subTitle * 1.5}px;
        font-weight     : 500;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size   : ${({theme}) => theme.fontSize.bellow980.subTitle}px;
            line-height : ${({theme}) => theme.fontSize.bellow980.subTitle * 1.5}px;
        }
    }
`

const Mask = styled.div`
    background-color    : ${({theme}) => theme.colors.main};
    z-index             : ${({theme}) => theme.zIndex.lower};
    width               : 100%;
    height              : 100%;
    opacity             : 0.3;
    position            : absolute;
    top                 : 0;
    left                : 0;
    display             : block;
`
