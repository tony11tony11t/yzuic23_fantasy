import React, { Component } from 'react'
import Title from '../../Title'
import './index.css'

export default class WebRecord extends Component {
    render() {
        return (
            <div>
                <Title chinese="活動紀錄" english="Record"/>
                <div  className="recordWrapper">
                    <div className="iframeWrapper">
                        <div class="iframeContainer">
                            <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="slideList">
                        {[...Array(31)].map((_ , i) => <img src={`./asset/record/record (${i + 1}).jpg`} />)}
                    </div>
                </div>
            </div>
        )
    }
}
