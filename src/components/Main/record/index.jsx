import React, { Component } from 'react'
import styled from 'styled-components'
import {IframeContainer , Wrapper} from '../../../theme/templete'

export default class WebRecord extends Component {
    render() {
        return (
            <Wrapper max = {1280}>
                <IframeContainer>
                    <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IframeContainer>
                <RecordPhotoContainer>
                    {[...Array(31)].map((_ , i) => <img src={`${process.env.PUBLIC_URL}/asset/record/record (${i + 1}).jpg`} />)}
                </RecordPhotoContainer>
            </Wrapper>
        )
    }
}

const RecordPhotoContainer = styled.div`

    img{
        display     : inline-block;
        width       : 48%;
        position    : relative;
        margin      : 20px 0 20px 2%;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin  : 10px 0 10px 1%;
        }
        

        &:nth-child(odd){
            margin  : 20px 2% 20px 0;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                margin  : 10px 1% 10px 0;
            }
        }
    }
`
