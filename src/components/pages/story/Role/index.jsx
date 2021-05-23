import React, { Component } from 'react'
import {RoleContainer}      from "./index.style"
export default class Role extends Component {
    render() {
        const {src , bg} = this.props
        return (
            <RoleContainer bg = {bg}>
                {bg ? <img className    = "bg" 
                           src          = {`${process.env.PUBLIC_URL}/asset/story_bg.png`} /> : null}
                <img className  = "role" 
                     src        = {`${process.env.PUBLIC_URL}/asset/story_${src}.png`} />
            </RoleContainer>
        )
    }
}
