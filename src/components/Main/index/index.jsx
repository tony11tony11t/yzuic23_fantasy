import React, { Component } from 'react'
import styled from 'styled-components'

export default class WebIndex extends Component {
    render() {
        return (
            <IndexWrapper>
                <h1>元智大學 資訊傳播學系<br/>第二十三屆畢業展</h1>
                <h2>YZU Information  Communication<br/>The  23rd Graduation  Exhibition</h2>
                <video src={`${process.env.PUBLIC_URL}/asset/bg_index_video.mp4`} muted autoPlay loop playsinline/>
                <Mask />
            </IndexWrapper>
        )
    }
}

const IndexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    height: calc(100% - 6rem);
    
    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding         : 1rem;
    }

    video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    h1{
        z-index : 3;
        color : #FFFFFF;
        font-size: 1.8rem;
        line-height: 2.5rem;
        margin : 0;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size   : 1.2rem;
            line-height: 2rem;
        }
    }

    h2{
        z-index : 3;
        color : #FFFFFF;
        font-size: .8rem;
        line-height: 1.5rem;
        margin : 0;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size   : .6rem;
            line-height: 1.3rem;
        }
    }
`

const Mask = styled.div`
    width: 100%;
    height: 100%;
    background-color: #044EB7;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: 2;
`
