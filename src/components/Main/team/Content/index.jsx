import React, { Component } from 'react'
import data from '../../../../data.json'
import styled , {keyframes} from 'styled-components'
import {Cancel} from '../../../../theme/templete'

export default class Content extends Component {
    
    render() {
        const {close , label} = this.props;
        const info = data.team[label];
        return (
            <TeamWrapper>
                <Cancel onClick = {close}/>
                <TeamContainer>
                    <img src={`${process.env.PUBLIC_URL}/asset/team_photo_${label}.jpg`}/>
                    <TeamIntro>
                        <h1>{info.Name}</h1>
                        <h4>{info.Content}</h4>
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

const TeamContainer = styled.div`
    max-width           : 1500px;
    margin              : auto;
    margin-top          : 80px;
    margin-bottom       : 40px;
    text-align          : center;
    position            : relative;
    padding             : 0 ${({theme}) => theme.page.padding}px;
    display             : flex;
    justify-content     : center;
    align-items         : center;
    height              : 80%;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding             : 0 ${({theme}) => theme.page.bellow980.padding}px;
        flex-direction      : column;
        margin-top          : 80px;
        justify-content     : flex-start;
    }
    

    img{
        width           : 1px;
        flex            : 0 0 475px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            height  : auto;
            flex    : 1;
            width   : 100%;
        }
    }
`

const TeamIntro = styled.div`
    color           : ${({theme}) => theme.colors.white};
    text-align      : left;
    flex            : 1;
    vertical-align  : top;
    position        : relative;
    margin-left     : 40px;
    height          : 593px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height          : auto;
        width           : 100%;
        margin-left     : 0;
    }

    h1{
        font-size       : ${({theme}) => theme.fontSize.h1}px;
        color           : ${({theme}) => theme.colors.white};
        margin-bottom   : 40px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size    : ${({theme}) => theme.fontSize.bellow980.h1}px;
            margin-top   : 20px;
        }
    }

    h4{
        font-size       : ${({theme}) => theme.fontSize.h4}px;
        color           : ${({theme}) => theme.colors.white};
        line-height     : ${({theme}) => theme.fontSize. h4 * 1.2}px;
        margin-bottom   : 100px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.h4}px;
            margin-bottom   : 50px;
        }
    }

    p{
        font-size       : ${({theme}) => theme.fontSize.p}px;
        color           : ${({theme}) => theme.colors.white};
        line-height     : ${({theme}) => theme.fontSize.p * 1.5}px;
        letter-spacing  : 1px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.p}px;
            line-height     : ${({theme}) => theme.fontSize.bellow980.p * 1.5}px;
            margin-bottom   : 2rem;
            text-align      : center;
        }

        &.member{
            position    : absolute;
            bottom      : 0;
            right       : 0;
            text-align  : right;
            white-space : pre-line;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                position        : relative;
                text-align      : center;
                margin-bottom   : 1rem;
            }
        }
    }
`
