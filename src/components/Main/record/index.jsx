import React, { Component } from 'react'
import styled from 'styled-components'

export default class WebRecord extends Component {
    render() {
        return (
            <RecordWrapper>
                <IframeWrapper>
                    <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IframeWrapper>
                <RecordPhotoContainer>
                    {[...Array(31)].map((_ , i) => <img src={`${process.env.PUBLIC_URL}/asset/record/record (${i + 1}).jpg`} />)}
                </RecordPhotoContainer>
            </RecordWrapper>
        )
    }
}

const RecordWrapper = styled.div`
    max-width: 1280px;
    margin : auto;
    position: relative;
    margin-top : 3rem;

`

const IframeWrapper = styled.div`

    position:relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    margin-bottom: 2rem;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        margin-bottom: 1rem;
    }

    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const RecordPhotoContainer = styled.div`


    img{
        display: inline-block;
        width: 48%;
        position: relative;
        margin: 1rem 0 1rem 2%;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin: .5rem 0 .5rem 1%;
        }
        

        &:nth-child(odd){
            margin: 1rem 2% 1rem 0;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                margin: .5rem 1% .5rem 0;
            }
        }
    }
`
