import React, { Component } from 'react'
import data from '../../../../data.json'
import styled , {keyframes} from 'styled-components'
import {Cancel , FixedContentWrapper} from '../../../../theme/templete'

export default class Content extends Component {
    
    render() {
        const {close , label} = this.props;
        const info = data.team[label];
        return (
            <FixedContentWrapper>
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
            </FixedContentWrapper> 
        )
    }
}

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
        margin-bottom   : 40px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin-top   : 20px;
        }
    }

    h4{
        margin-bottom   : 100px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin-bottom   : 50px;
        }
    }

    p{

        @media ${({theme}) => theme.mediaQueries.bellow980} {
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
