import React, { Component } from 'react'
import {RoleContainer}      from "./index.style"
import RaderChart           from '../../../RaderChart'
export default class Role extends Component {

    render() {
        const {src , bg , chart , raderVisible , changeRaderVisible} = this.props;
        return (
            <RoleContainer bg = {bg} raderVisible = {raderVisible}>
                <img    className = "raderBtn"
                        src       = {`${process.env.PUBLIC_URL}/asset/raderBtn.png`} 
                        onClick   = {changeRaderVisible}/>

                <div className = "roleImgContainer">
                    {bg ? <img  className    = "bg" 
                                src          = {`${process.env.PUBLIC_URL}/asset/story_bg.png`} /> : null}
                    <img className  = "role" 
                         src        = {`${process.env.PUBLIC_URL}/asset/story_${src}.png`} />
                </div>

                {
                    chart && raderVisible ?
                        <div className = "raderChartContainer">
                            <RaderChart size    = {5} 
                                        scale   = {window.innerWidth > 980 ? window.innerWidth / 1920 : window.innerWidth / 500} 
                                        data    = {chart}/>
                        </div> : null
                }  
            </RoleContainer>
        )
    }
}
