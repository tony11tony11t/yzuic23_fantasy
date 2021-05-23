import React, { Component } from 'react'
import SubnavBar from '../../SubnavBar'
import MobileSubnavBar from '../../MobileSubnavBar'
import styled from 'styled-components'
import Role from './Role'
import RaderChart from '../../RaderChart'
import data from '../../../data.json';
import { v4 as uuidv4 } from "uuid"
import {Wrapper} from '../../../theme/templete'

export default class WebIndex extends Component {
    state = {
        page : "theme", // "rookie" | "chubby" | "boomboom" | "fantasy" | "theme"
    }

    getContent = () => {
        return (
            <React.Fragment>
                <h4>「萌芽、碰撞、成長、茁壯， 屬於我們的狂想正在進化。」</h4>
                <p>
                    「狂想」是什麼呢 ‧‧‧‧‧‧？<br/>
                    它是自由不受限的想像、跳脫框架的夢想。
                </p>
                <p>
                    初步入大學的我們，默默地種下對未來的想像，<br/>
                    將資傳系四年探索，化為四隻小怪獸的進化旅程，<br/>
                    從渺小的大一 — Rookie菜鳥獸，最終進化成真正的資傳人，大四 — Fantasy狂想獸。
                </p>
                <p>強調四年的成長，亦結合對科幻未來人的想像：
                    <br/>「資傳人最後會進化成什麼模樣呢？」
                </p>
                <p>「狂想進化論」展現五顏六色的創意與想像，
                    <br/>一場屬於我們的狂想進化，未完待續 ‧‧‧‧‧‧！
                </p>
            </React.Fragment>
        )
    }

    changePage = page => this.setState({page})

    getMonster = () => {
        const {page} = this.state;
        const {EnName , ChName , Intro , Info , Chart} = data.monster[page];
        return (
            <MonsterWrapper>
                <div className="roleInfo">
                    <h1>
                        <span>{ChName}</span>&nbsp;{EnName}
                    </h1>
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
                <div className="raderChartContainer">
                    <RaderChart size    = {5} 
                                scale   = {window.innerWidth > 980 ? window.innerWidth / 1920 : window.innerWidth / 500} 
                                data    = {Chart}/>
                </div>
            </MonsterWrapper>
        )
    }
    
    render() {
        const {page} = this.state;
        const {storySubNavBarItems} = data;
        return (
            <Wrapper>
                <SubnavBar  data         = {storySubNavBarItems} 
                            changePage   = {this.changePage}
                            width        = {65}/>
                <MobileSubnavBar  data         = {storySubNavBarItems} 
                                  changePage   = {this.changePage}/>
                <StoryContainer ref = { this.contentRef } >
                    <Role src = {page} bg = {page !== "theme"}/>
                    <Content>
                        {page === "theme" ? this.getContent() : this.getMonster()}
                    </Content>
                </StoryContainer>
            </Wrapper>
        )
    }
}

const StoryContainer = styled.div`
    display         : flex;
    flex-direction  : row;
    flex            : 1;
    margin-top      : 20px;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex-direction  : column;
    }

    h1{
        color         : ${({theme}) => theme.colors.main};
        font-weight   : 500;
    }

    h4{
        color         : ${({theme}) => theme.colors.main};
    }

    p{
        color       : ${({theme}) => theme.colors.black};
        margin      : 30px 0;
    }
`

const Content = styled.div`
    flex    : 1;
`

const MonsterWrapper = styled.div`
    position    : relative;
    height      : 100%;

    .roleInfo{
        color   : ${({theme}) => theme.colors.main};
        height  : 100%;
        

        p{
            color           : ${({theme}) => theme.colors.main};
            padding-right   : 50%;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                padding-right   : 0;
            }
        }

        td{
            vertical-align  : top;
            font-size       : ${({theme}) => theme.fontSize.p}px;
            padding         : 10px 10px 0 0;
            line-height     : ${({theme}) => theme.fontSize.p * 1.5}px;

            &.field{
                width       : 80px;
            }

            &:last-child{
                padding-right : 50%; 

                @media ${({theme}) => theme.mediaQueries.bellow980} {
                    padding-right   : 0;
                }   
            }
        }
        
    }

    .raderChartContainer{
        position    : absolute;
        top         : 0;
        right       : 0;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            position    : relative;
            text-align: center;
        }
    }
`
