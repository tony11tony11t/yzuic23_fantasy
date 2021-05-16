import React, { Component } from 'react'
import './index.css'

export default class Title extends Component {
    render() {
        const {chinese , english , theme} = this.props;
        return (
            <h2 className={`title ${theme}`}>{chinese}<br/><span>{english}</span></h2>
        )
    }
}
