import React, { Component }     from 'react'
import { v4 as uuidv4 }         from "uuid"
import Role                     from './Role'
import SubNavBar                from '../../SubNavBar'
import RaderChart               from '../../RaderChart'
import data                     from '../../../data.json';
import {Wrapper}                from '../../../theme/templete'
import {StoryContainer , 
        MonsterWrapper}         from './index.style'

export default class WebIndex extends Component {
    state = {
        page            : "theme", // "rookie" | "chubby" | "boomboom" | "fantasy" | "theme"
        raderVisible    : false
    }

    getContent = () => {
        return (
            <React.Fragment>
                <h3>「萌芽、碰撞、成長、茁壯， 屬於我們的狂想正在進化。」</h3>
                <h4>
                    「狂想」是什麼呢 ‧‧‧‧‧‧？<br/>
                    它是自由不受限的想像、跳脫框架的夢想。
                </h4>
                <h4>
                    初步入大學的我們，默默地種下對未來的想像，<br/>
                    將資傳系四年探索，化為四隻小怪獸的進化旅程，<br/>
                    從渺小的大一 — Rookie菜鳥獸，最終進化成真正的資傳人，大四 — Fantasy狂想獸。
                </h4>
                <h4>強調四年的成長，亦結合對科幻未來人的想像：
                    <br/>「資傳人最後會進化成什麼模樣呢？」
                </h4>
                <h4>「狂想進化論」展現五顏六色的創意與想像，
                    <br/>一場屬於我們的狂想進化，未完待續 ‧‧‧‧‧‧！
                </h4>
            </React.Fragment>
        )
    }

    changePage = page => {
        this.setState({page , raderVisible : false});
    }

    changeRaderVisible = () => {
        const {raderVisible} = this.state;
        this.setState({raderVisible : !raderVisible});
    }

    getMonster = () => {
        const {page} = this.state;
        const {EnName , ChName , Intro , Info , Chart} = data.monster[page];
        return (
            <MonsterWrapper>
                <div className="roleInfo">
                    <div className="intro">
                        <div className="text">
                            <h1>
                                <span>{ChName}</span>&nbsp;{EnName}
                            </h1>
                            <h3>{Intro}</h3>
                        </div>
                        {
                            window.innerWidth > 980 ? 
                                <RaderChart size    = {5}
                                            scale   = {window.innerWidth / 1920 } 
                                            data    = {Chart}/> : null
                        }
                    </div>
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
            </MonsterWrapper>
        )
    }
    
    render() {
        const {page , raderVisible} = this.state;
        const {storySubNavBarItems} = data;
        let chart = page != "theme" ? data.monster[page].Chart : null;
        
        return (
            <Wrapper>
                <SubNavBar  data         = {storySubNavBarItems} 
                            changePage   = {this.changePage}
                            width        = {65}/>
                <StoryContainer ref = { this.contentRef } >
                    <Role   src                 = {page} 
                            bg                  = {page !== "theme"} 
                            chart               = {chart} 
                            raderVisible        = {raderVisible}
                            changeRaderVisible  = {this.changeRaderVisible}/>
                    <div className ="content">
                        {page === "theme" ? this.getContent() : this.getMonster()}
                    </div>
                </StoryContainer>
            </Wrapper>
        )
    }
}