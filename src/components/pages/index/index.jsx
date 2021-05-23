import React, { Component }     from 'react'
import {IndexContainer ,Mask}   from './index.style'

export default class WebIndex extends Component {
    render() {
        return (
            <IndexContainer>
                <h2>元智大學 資訊傳播學系<br/>第二十三屆畢業展</h2>
                <h5>YZU Information  Communication<br/>The  23rd Graduation  Exhibition</h5>
                <video src={`${process.env.PUBLIC_URL}/asset/bg_index_video.mp4`} muted autoPlay loop playsinline/>
                <Mask />
            </IndexContainer>
        )
    }
}

