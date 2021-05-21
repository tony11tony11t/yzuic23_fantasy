import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../../../data.json'

export default class FacebookContent extends Component {
    render() {
        return (
            <FacebookWrapper>
                {
                    data.history.map((d , i) =>{
                        return (
                            <HistoryWrapper>
                                <div className = "left">
                                    {
                                        i % 2 == 1 ? (
                                            <HistoryContainerLeft>
                                                <div className = "ImgContainer">
                                                    <img src={`${process.env.PUBLIC_URL}/asset/facebook/${d.src}`} />
                                                </div>
                                                <div>
                                                    <h1>2020<br/><span>{d.date}</span></h1>
                                                    <p>{d.content}</p>
                                                </div>
                                            </HistoryContainerLeft>
                                        ) : null
                                    }
                                </div>
                                <div className = "right">
                                    {
                                        i % 2 == 0 ? (
                                            <HistoryContainerRight>
                                                <div>
                                                    <h1>2020<br/><span>{d.date}</span></h1>
                                                    <p>{d.content}</p>
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

    width: 85%;
    max-width: 1600px;
    margin : auto;
    text-align: center;

    .endRow{
        display: flex;
        height: 200px;

        .left{
            flex : 1;
            text-align: right;
            border-right: 5px solid #044EB7;
            padding-right: 3rem;
            margin-bottom: 1rem;
        }

        .right{
            flex : 1;
            text-align: left;
            border-left: 5px solid #044EB7;
            padding-left : 3rem;
            margin-bottom: 1rem;
        }
    }

`

const HistoryWrapper = styled.div`

    display: flex;
    height: 300px;

    div{
        flex : 1;

        &.left{
            text-align: right;
            border-right: 5px solid #044EB7;
            padding-right: 3rem;
        }

        &.right{
            text-align: left;
            border-left: 5px solid #044EB7;
            padding-left : 3rem;
        }
    }
`


const HistoryContainerLeft = styled.div`
    border : 6px solid #044EB7;
    border-radius: 30px;
    background-color: #fff;
    display: flex;
    padding : 1.5rem;
    position: relative;

    &::before{
        content : "";
        width : 30px;
        height : 30px;
        display : block;
        position : absolute;
        border-radius : 999px;
        top : 10%;
        right : calc( -3rem + -3px + -22.5px + -5px);
        
        background-color : #044EB7;
        border : 5px solid #fff;
        opacity : 1;
    }

    &::after{
        content : "";
        width : 2.4rem;
        height : 10px;
        display : block;
        position : absolute;
        top : calc(10% + 20px - 5px);
        right : -2.5rem;
        background-color : #044EB7;
        opacity : 1;
    }

    p{
        font-size: 1.8rem;
        color: #044EB7;
        margin: 0 0 0 1.5rem;
    }

    &>div{
        flex: 1;

        &.ImgContainer{
            flex: 1.5;
            img{
                width: 100%;
            }
        
        }

        h1{
            font-size: 1.5rem;
            color: #044EB7;

            span{
                font-size: 1.8rem;
            }
        }
    }
`


const HistoryContainerRight = styled(HistoryContainerLeft)`

    &::before{
        top : 10%;
        left : calc( -3rem + -3px + -22.5px + -5px);
    }

    &::after{
        top : calc(10% + 20px - 5px);
        left : -2.5rem;
    }
    p{
        margin: 0 1.5rem 0 0;
    }
`

