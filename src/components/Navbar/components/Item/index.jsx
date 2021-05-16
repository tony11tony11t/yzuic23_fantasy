import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const {src , chinese , english , changePage} = this.props
        return (
            <div className="item" onClick={changePage.bind(this , src)}>
                <img src={`./asset/icon_${src}.png`} />
                <p className="label"><span>{chinese}</span><br/>{english}</p>
            </div>
        )
    }
}
