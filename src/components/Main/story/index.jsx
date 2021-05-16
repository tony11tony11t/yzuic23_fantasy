import React, { Component } from 'react'
import './index.css'
import SubnavBar from '../../SubnavBar'
import Title from '../../Title'
import Role from './Role'
import RaderChart from '../../RaderChart'
import Data from '../../../data.json';
import { v4 as uuidv4 } from "uuid"

export default class WebIndex extends Component {
    state = {
        page : "theme", // "rookie" | "chubby" | "boomboom" | "fantasy" | "theme"
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
                <div className="image">
                    <img src='./asset/story_all.jpg'/>
                </div>
                <div className="description">
                    <p>
                        <span>「萌芽、碰撞、成長、茁壯， 屬於我們的狂想正在進化。」</span><br/><br/>
                        「狂想」是什麼呢 ‧‧‧‧‧‧？
                        它是自由不受限的想像、跳脫框架的夢想。
                        初步入大學的我們，默默地種下對未來的想像，
                        將資傳系四年探索，化為四隻小怪獸的進化旅程，
                        從渺小的大一 — Rookie菜鳥獸，
                        最終進化成真正的資傳人，大四 — Fantasy狂想獸，
                        強調四年的成長，亦結合對科幻未來人的想像：
                        「資傳人最後會進化成什麼模樣呢？」<br/><br/>

                        「狂想進化論」展現五顏六色的創意與想像，
                        一場屬於我們的狂想進化，未完待續 ‧‧‧‧‧‧！
                    </p>
                </div>
            </React.Fragment>
        )
    }

    changePage = page => this.setState({page})

    getMonster = () => {
        const {page} = this.state;
        const {EnName , ChName , Intro , Info , Chart} = Data.monster[page];
        return (
            <React.Fragment>
                <div className="roleInfo">
                    <h3 className="roleName">
                        <span className="ChName">{ChName}</span>&nbsp;
                        {EnName}
                    </h3>
                    <p className="roleIntro">{Intro}</p>
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
                <div className="roleWrapper">
                    <Role src={page}/>
                </div>
                <div className="raderChartWrapper">
                    <RaderChart size    = {5} 
                                scale   = {1} 
                                data    = {Chart}/>
                </div>
            </React.Fragment>
        )
    }
    
    render() {
        const {page} = this.state;
        return (
            <div>
                <Title chinese="狂想故事" english="Story"/>
                <div className="subNavWrapper">
                    <SubnavBar data={this.subNavBarItems} changePage = {this.changePage}/>
                </div>
                <div className="contentWrapper">
                    {page === "theme" ? this.getContent() : this.getMonster()};
                </div>  
            </div>
        )
    }
}
