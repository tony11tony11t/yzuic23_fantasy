import React, { Component }     from 'react'
import {v4 as uuidv4}           from 'uuid' 
import {IframeContainer , 
        Wrapper}                from '../../../theme/templete'
import {RecordPhotoContainer}   from './index.style'

export default class WebRecord extends Component {
    render() {
        return (
            <Wrapper max = {1280}>
                <IframeContainer>
                    <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IframeContainer>
                <RecordPhotoContainer>
                    {[...Array(31)].map((_ , i) => 
                        <img    src = {`${process.env.PUBLIC_URL}/asset/record/record (${i + 1}).jpg`} 
                                key = {uuidv4()}/>
                    )}
                </RecordPhotoContainer>
            </Wrapper>
        )
    }
}
