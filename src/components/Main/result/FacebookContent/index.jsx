import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../../../data.json'

export default class FacebookContent extends Component {
    state = {
        version : "com" // "com" | "mobile"
    }

    constructor(props){
        super(props);
        this.state.version = window.innerWidth >= 980 ? "com" : "mobile";
    }

    componentDidMount = () => {
        window.addEventListener("resize" , () => {
            this.setState({version : window.innerWidth >= 980 ? "com" : "mobile"})
        })
    }
        
    render() {
        const {version} = this.state;
        return (
            <FacebookWrapper>
                {
                    data.history.map((d , i) =>{
                        return (
                            <HistoryWrapper>
                                <div className = "left">
                                    {
                                        (i % 2 == 1 && version == "com")? (
                                            <HistoryContainerLeft>
                                                <div className = "ImgContainer">
                                                    <img src={`${process.env.PUBLIC_URL}/asset/facebook/${d.src}`} />
                                                </div>
                                                <div>
                                                    <h3>2020<br/><span>{d.date}</span></h3>
                                                    <h2>{d.content}</h2>
                                                </div>
                                            </HistoryContainerLeft>
                                        ) : null
                                    }
                                </div>
                                <div className = "right">
                                    {
                                        (i % 2 == 0 || version == "mobile")? (
                                            <HistoryContainerRight>
                                                <div>
                                                    <h3>2020<br/><span>{d.date}</span></h3>
                                                    <h2>{d.content}</h2>
                                                </div>
                                                <div className = "ImgContainer">
                                                    <img src={`${process.env.PUBLIC_URL}/asset/facebook/${d.src}`} />
                                                </div>
                                            </HistoryContainerRight>
                                        ) : null
                                    }
                                </div>
                            </HistoryWrapper>
                        )
                    })
                }
                <div className = "endRow">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </FacebookWrapper>
        )
    }
}

const FacebookWrapper = styled.div`

    width       : 100%;
    max-width   : 1200px;
    margin      : auto;
    text-align  : center;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width: 100%;
    }

    .endRow{
        display : flex;
        height  : 100px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            height  : 30px;
        }

        .left{
            flex            : 1;
            border-right    : 5px solid ${({theme}) => theme.colors.main};
            padding-right   : 60px;
            margin-bottom   : 20px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                flex            : 0;
                padding-right   : 0;
            }
        }

        .right{
            flex            : 1;
            border-left     : 5px solid ${({theme}) => theme.colors.main};
            padding-left    : 60px;
            margin-bottom   : 20px;
        }
    }
`

const HistoryWrapper = styled.div`

    display : flex;
    height  : 300px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height  : 250px;
    }

    div{
        flex : 1;

        &.left{
            text-align      : right;
            border-right    : 5px solid ${({theme}) => theme.colors.main};
            padding-right   : 60px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                flex            : 0;
                padding-right   : 0;
            }
        }

        &.right{
            text-align      : left;
            border-left     : 5px solid ${({theme}) => theme.colors.main};
            padding-left    : 60px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                flex            : 1;
                padding-left    : 40px;
            }
        }
    }
`


const HistoryContainerLeft = styled.div`
    border              : 6px solid ${({theme}) => theme.colors.main};
    border-radius       : 30px;
    background-color    : ${({theme}) => theme.colors.white};
    display             : flex;
    padding             : 30px;
    position            : relative;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        padding         : 20px;
    }

    &::before{
        content             : "";
        width               : 30px;
        height              : 30px;
        display             : block;
        position            : absolute;
        border-radius       : 999px;
        top                 : 10%;
        right               : calc( -60px + -3px + -22.5px + -5px); 
        background-color    : ${({theme}) => theme.colors.main};
        border              : 5px solid ${({theme}) => theme.colors.white};
        opacity             : 1;
    }

    &::after{
        content             : "";
        width               : 48px;
        height              : 10px;
        display             : block;
        position            : absolute;
        top                 : calc(10% + 20px - 5px);
        right               : -50px;
        background-color    : ${({theme}) => theme.colors.main};
        opacity             : 1;
    }

    h2{
        color           : ${({theme}) => theme.colors.main};
        font-weight     : 500;
        margin          : 0 0 0 20px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.h4}px;
            line-height     : ${({theme}) => theme.fontSize.bellow980.h4 * 1.4}px;
            margin      : 0
        }
    }

    h3{
        color           : ${({theme}) => theme.colors.main};
        margin-bottom   : 20px;
        font-weight     : 500;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size       : ${({theme}) => theme.fontSize.bellow980.h5}px;
            line-height     : ${({theme}) => theme.fontSize.bellow980.h5 * 1.4}px;
        }

        span{
            font-size       : ${({theme}) => theme.fontSize.h1}px;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                font-size   : ${({theme}) => theme.fontSize.bellow980.h3}px;
            }
        }
    }

    &>div{
        flex    : 1;

        &.ImgContainer{
            flex    : 1.3;
            img{
                width   : 100%;
            }
        }
        
        @media ${({theme}) => theme.mediaQueries.bellow980} {
            &.ImgContainer{
                flex        : 0 0 130px;
                text-align  : right;
                align-self  : center;
            }
        }
    }
`


const HistoryContainerRight = styled(HistoryContainerLeft)`

    &::before{
        top     : 10%;
        left    : calc( -60px + -3px + -22.5px + -5px);

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            left : calc( -40px + -3px + -22.5px + -5px);
        }
    }

    &::after{
        top     : calc(10% + 20px - 5px);
        left    : -50px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            left    : -30px;
            width   : 28px;
        }
    }

    h2{
        margin : 0 20px 0 0;
    }
`

