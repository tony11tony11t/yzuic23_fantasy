import React, { Component } from 'react'
import styled from 'styled-components'

export default class Item extends Component {
    render() {
        const {src , chinese , english , changePage} = this.props
        return (
            <ItemContainer onClick={changePage.bind(this , src)}>
                <img src={`${process.env.PUBLIC_URL}/asset/icon_${src}.png`} />
                <p><span>{chinese}</span><br/>{english}</p>
            </ItemContainer>
        )
    }
}


const ItemContainer = styled.div`
    display: block;
    flex : 1;
    position: relative;
    text-align: center;

    img{
        width: 60%;
        z-index: 2;
        cursor: pointer;
        position: relative;

        &:hover+p{
            top : 95%;
            opacity: 1;
        }
    }

    p{
        background-color: #fff;
        border: 2px solid #044EB7;
        color: #044EB7;
        font-size: .4rem;
        padding: .3rem 0;
        text-align: center;
        margin: 0;
        position: absolute;
        z-index: 1;
        left : 50%;
        transform: translateX(-50%);
        top: 0;
        width: calc(60% - 4px);
        white-space:pre-line;
        transition : all .5s;
        opacity: 0;

        span{
            font-size: .8rem;
        }
    }
`
