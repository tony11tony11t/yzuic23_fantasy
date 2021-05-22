import React, { Component } from 'react'
import styled from 'styled-components'

export default class Item extends Component {
    render() {
        const {src , chinese , english , changePage} = this.props
        return (
            <ItemContainer onClick={changePage.bind(this , src)}>
                <img src={`${process.env.PUBLIC_URL}/asset/icon_${src}.png`} />
                <p>{chinese}<br/><span>{english}</span></p>
            </ItemContainer>
        )
    }
}


const ItemContainer = styled.div`
    display     : block;
    flex        : 1;
    position    : relative;
    text-align  : center;

    img{
        width       : 70px;
        z-index     : ${({theme}) => theme.zIndex.lower};
        cursor      : pointer;
        position    : relative;

        &:hover+p{
            top     : 95%;
            opacity : 1;
        }
    }

    p{
        background-color    : ${({theme}) => theme.colors.white};
        color               : ${({theme}) => theme.colors.main};
        font-size           : ${({theme}) => theme.fontSize.subTitle}px;
        line-height         : ${({theme}) => theme.fontSize.subTitle * 1.2}px;
        z-index             : ${({theme}) => theme.zIndex.lowest};
        letter-spacing      : 2px;
        border              : 2px solid ${({theme}) => theme.colors.main};
        padding             : .4rem 0;
        text-align          : center;
        position            : absolute;
        left                : 50%;
        top                 : 0;
        transform           : translateX(-50%);
        width               : 70px;
        white-space         : pre-line;
        transition          : all .5s;
        opacity             : 0;

        span{
            font-size       : ${({theme}) => theme.fontSize.subTitle * 0.5}px;
            letter-spacing  : 0;
        }
    }

    
`
