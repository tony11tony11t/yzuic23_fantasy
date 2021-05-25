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
                    <iframe src="https://www.youtube.com/embed/becbbAOQx5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IframeContainer>
                <IframeContainer>
                    <iframe src="https://www.youtube.com/embed/zIrUDLCqkvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IframeContainer>
                <IframeContainer>
                    <iframe src="https://www.youtube.com/embed/o6Jn9S2ykb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IframeContainer>
                <RecordPhotoContainer>
                    {[...Array(30)].map((_ , i) => 
                        <img    src = {`${process.env.PUBLIC_URL}/asset/record/record (${i + 1}).jpg`} 
                                key = {uuidv4()}/>
                    )}
                </RecordPhotoContainer>
            </Wrapper>
        )
    }
}
