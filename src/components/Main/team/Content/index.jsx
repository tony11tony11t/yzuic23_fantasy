import React, { Component } from 'react'
import './index.css'
import Data from '../../../../data.json'

export default class Content extends Component {
    
    render() {
        const {close , label} = this.props;
        const info = Data.team[label];
        return (
            <div className="teamInfo">
                <img src = "./asset/cancel.png" className="close" onClick={close}/>
                <div className="teamContent">
                    <div className="teamTitle">
                        <h1>{info.Name}</h1>
                        <p className="subTitle">{info.Content}</p>
                    </div>
                    <div className="teamIntro">
                        <img src={`./asset/team_photo_${label}.jpg`} className="photo"/>
                        <p className="description">
                            {info.MurMur}
                        </p>
                    </div>
                </div>
            </div> 
        )
    }
}
