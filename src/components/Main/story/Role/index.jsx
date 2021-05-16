import React, { Component } from 'react'
import './index.css'

export default class Role extends Component {
    render() {
        const {src} = this.props
        return (
            <div className="roleContainer">
                <img className="bg" src="./asset/story_bg.png" />
                <img className="role" src={`./asset/story_${src}.png`} />
            </div>
        )
    }
}
