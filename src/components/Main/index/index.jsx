import React, { Component } from 'react'
import './index.css'

export default class WebIndex extends Component {
    render() {
        return (
            <div className="wrapper">
                <video src="./asset/bg_index_video.mp4" muted autoPlay loop/>
                <div className="mask"></div>
                <div className="wrapperImg">
                    <div className="wrapperImgLeft">
                        <img src='./asset/monster_big.png' />
                    </div>
                    <div className="wrapperImgRight">
                        <img src='./asset/monster_A.png' />
                        <img src='./asset/title.png' />
                        <img src='./asset/monster_B.png' />
                    </div>
                </div>
                
            </div>
        )
    }
}
