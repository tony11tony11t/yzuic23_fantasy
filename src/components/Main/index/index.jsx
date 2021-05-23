import React, { Component } from 'react'
import styled from 'styled-components'
import {Wrapper} from '../../../theme/templete'

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

const IndexContainer = styled(Wrapper)`

    video{
        position    : absolute;
        top         : 0;
        left        : 0;
        width       : 100%;
        height      : 100%;
        object-fit  : cover;
        z-index     : ${({theme}) => theme.zIndex.lowest};
    }

    h2{
        z-index         : ${({theme}) => theme.zIndex.medium};
        font-weight     : 500;
        margin-bottom   : 10px;
    }

    h5{
        z-index         : ${({theme}) => theme.zIndex.medium};
        font-weight     : 500;
    }
`

const Mask = styled.div`
    background-color    : ${({theme}) => theme.colors.main};
    z-index             : ${({theme}) => theme.zIndex.lower};
    width               : 100%;
    height              : 100%;
    opacity             : 0.3;
    position            : absolute;
    top                 : 0;
    left                : 0;
    display             : block;
`
