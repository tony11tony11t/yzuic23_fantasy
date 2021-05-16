import React, { Component } from 'react'
import './index.css'

export default class TeamButton extends Component {
    render() {
        const {label , show} = this.props;
        return (
            <div className="teamButton"  style={{backgroundImage : `url('./asset/team_bg.png')`}} onClick={show.bind(this , label)}>
                <div className="head">
                    <img src={`./asset/team_img_${label}.png`}/>
                </div>
                <div className="text">
                    <img src={`./asset/team_txt_${label}.png`} />
                </div>
            </div>

        )
    }
}
