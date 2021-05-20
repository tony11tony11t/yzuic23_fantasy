import React, { Component } from 'react'
import Data from '../../../../data.json'
import styled , {keyframes} from 'styled-components'

export default class Content extends Component {
    
    render() {
        const {close , label} = this.props;
        const info = Data.team[label];
        return (
            <TeamWrapper>
                <Cancel onClick={close}/>
                <TeamContainer>
                    <img src={`${process.env.PUBLIC_URL}/asset/team_photo_${label}.jpg`}/>
                    <TeamIntro>
                        <h1>{info.Name}</h1>
                        <p>{info.Content}</p>
                        <p className="description">{info.MurMur}</p>
                        <p className="member">{info.Member}</p>
                    </TeamIntro>
                </TeamContainer>
            </TeamWrapper> 
        )
    }
}

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

const TeamWrapper = styled.div`
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

const TeamContainer = styled.div`
    max-width: 1500px;
    margin: auto;
    margin-top: 5rem;
    padding: 0 4rem;
    height: calc(100% - 5rem);
    text-align: center;
    position: relative;
    

    img{
        display: inline-block;
        height: 90%;
        margin-right: 2rem;
    }
`

const TeamIntro = styled.div`
    color: #fff;
    text-align: left;
    display: inline-block;
    vertical-align: top;
    position: relative;
    height: 90%;
    width : 40%;

    h1{
        text-align: left;
        margin-top : 0;
    }

    p{
        font-size: 1.2rem;
        color: #fff;
        margin-bottom: 5rem;
        font-weight : 600;

        &.description{
            font-size: 1rem;
            font-weight : 500;
        }

        &.member{
            font-size: 1rem;
            font-weight : 500;
            margin-bottom: 0;
            position: absolute;
            bottom: 0;
            right : 0;
            text-align: right;
            white-space: pre-line;
        }
    }
`

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
