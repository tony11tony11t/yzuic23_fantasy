import React, { Component } from 'react'
import {Link}               from 'react-router-dom'
import {ItemContainer}      from './index.style'

export default class Item extends Component {
    render() {
        const {src , chinese , english} = this.props
        return (
            <ItemContainer>
                <Link to = {`/${src}`}>
                    <img src = {`${process.env.PUBLIC_URL}/asset/icon_${src}.png`} />
                </Link>
                <p>{chinese}<br/><span>{english}</span></p>
            </ItemContainer>
        )
    }
}
