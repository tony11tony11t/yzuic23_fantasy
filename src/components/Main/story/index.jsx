import React, { Component } from 'react'
import SubnavBar from '../../SubnavBar'
import styled from 'styled-components'
import Role from './Role'
import RaderChart from '../../RaderChart'
import Data from '../../../data.json';
import { v4 as uuidv4 } from "uuid"

export default class WebIndex extends Component {
    state = {
        page : "rookie", // "rookie" | "chubby" | "boomboom" | "fantasy" | "theme"
    }
    subNavBarItems = [{
        name : "theme",
        label : "主題概念"
    },{
        name : "rookie",
        label : "Rookie"
    },{
        name : "chubby",
        label : "Chubby"
    },{
        name : "boomboom",
        label : "BoomBoom"
    },{
        name : "fantasy",
        label : "Fantasy"
    }]

    getContent = () => {
        return (
            <React.Fragment>
                <h2>「萌芽、碰撞、成長、茁壯， 屬於我們的狂想正在進化。」</h2>
                <p>「狂想」是什麼呢 ‧‧‧‧‧‧？<br/>它是自由不受限的想像、跳脫框架的夢想。</p>
                <p>初步入大學的我們，默默地種下對未來的想像，<bt/>將資傳系四年探索，化為四隻小怪獸的進化旅程，<br/>從渺小的大一 — Rookie菜鳥獸，最終進化成真正的資傳人，大四 — Fantasy狂想獸。</p>
                <p>強調四年的成長，亦結合對科幻未來人的想像：<br/>「資傳人最後會進化成什麼模樣呢？」</p>
                <p>「狂想進化論」展現五顏六色的創意與想像，<br/>一場屬於我們的狂想進化，未完待續 ‧‧‧‧‧‧！</p>
            </React.Fragment>
        )
    }

    changePage = page => this.setState({page})

    getMonster = () => {
        const {page} = this.state;
        const {EnName , ChName , Intro , Info , Chart} = Data.monster[page];
        return (
            <MonsterWrapper>
                <div className="roleInfo">
                    <h3>
                        <span>{ChName}</span>&nbsp;
                        {EnName}
                    </h3>
                    <p>{Intro}</p>
                    <table>
                        <tbody>
                            {Info.map(obj => {
                                return (<tr key = {uuidv4()}>
                                            <td className="field">{`${obj.field}：`}</td>
                                            <td>{obj.value}</td>
                                        </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="raderChartWrapper">
                    <RaderChart size    = {5} 
                                scale   = {window.innerWidth > 980 ? window.innerWidth / 1920 : window.innerWidth / 500} 
                                data    = {Chart}/>
                </div>
            </MonsterWrapper>
        )
    }
    
    render() {
        const {page} = this.state;
        return (
            <StoryWrapper>
                <StoryContainer flex={1} align={"center"}>
                    <Role src = {page} bg = {page !== "theme"}/>
                </StoryContainer>
                <StoryContainer ref = { this.contentRef } flex={1.6} align={"flex-start"}>
                    <SubnavBar data         = {this.subNavBarItems} 
                               changePage   = {this.changePage}/>
                    <div>
                        {page === "theme" ? this.getContent() : this.getMonster()}
                    </div>
                </StoryContainer>
            </StoryWrapper>
        )
    }
}

const StoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    position: relative;
    margin-top : 2rem;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex-direction: column;
    }
`

const StoryContainer = styled.div`
    flex: ${({flex}) => flex};

    h2{
        font-size : 1.2rem;
        color: #044EB7;
        font-weight : 600;
    }

    p{
        font-size : 1rem;
        margin : 1.5rem 0;
        line-height: 1.5rem;

        span{
            font-size : 1.2rem;
            color: #044EB7;
            font-weight : 600;
        }
    }
`
const MonsterWrapper = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: space-between;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex-direction: column;
    }

    .roleInfo{
        color: #044eb7;
        font-size: .8rem;
        flex: 0.8;

        h3{
            z-index: 1;
            position: relative;
            font-size: 1.2rem;
            white-space: nowrap;

            span{
                font-size: 2rem;
            }

            &::after{
                content: "";
                display: block;
                background-color: #FFE200;
                width: 4rem;
                height: 1rem;
                position: absolute;
                bottom: -.2rem;
                left: 0;
                z-index: -1;
            }
        }

        td{
            vertical-align :top;
            font-size: 1rem;
            font-weight: 500;
            padding: .5rem .5rem 0 0;
            line-height: 1.5rem;

            &.field{
                width: 4rem;
            }
        }
    }

    .raderChartWrapper{
        text-align: center;
    }
`
