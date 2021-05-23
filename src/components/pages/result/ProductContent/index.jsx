import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../../../data.json'
import {v4 as uuidv4} from 'uuid'

export default class ProductContent extends Component {
    render() {
        return (
            <ProductWrapper>
                {
                    data.product.map((d , i) => {
                        return (
                            <ProductContainer length = {d.src.length} index = {i}>
                                <h5>{d.name}</h5>
                                <ProductImgContainer length = {d.src.length}>
                                {
                                    d.src.map(s => 
                                        <img src = {`${process.env.PUBLIC_URL}/asset/products/${s}`} 
                                             key = {uuidv4()}/>)
                                }
                                </ProductImgContainer>
                            </ProductContainer>
                        )
                    })
                }
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
    width       : 100%;
    margin      : auto;
    text-align  : center;
`

const ProductContainer = styled.div`
    position        : relative;
    margin          : 40px 0 60px;
    width           : ${({length}) => length > 1 ? "100%" : "50%"};
    display         : inline-block;
    padding-left    : ${({length , index}) => length == 1 ? (index % 2 == 1 ? ".8rem" : 0) : 0};
    padding-right   : ${({length , index}) => length == 1 ? (index % 2 == 0 ? ".8rem" : 0) : 0};
    
    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width           : 100%;
        padding-left    : 0;
        padding-right   : 0;
    }

    &:last-child{
        padding : 0;
    }

    h5{
        background-color: ${({theme}) => theme.colors.main};
        padding         : 10px 20px;
        position        : absolute;
        top             : 0;
        transform       : translateY(-50%);
        border-radius   : 16px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            padding         : 6px 16px;
            border-radius   : 12px;
        }
    }
`

const ProductImgContainer = styled.div`
    width           : 100%;
    display         : flex;
    flex-wrap       : wrap;
    justify-content : space-between;

    img{
        width       : 1px;
        flex        : 1;
        padding     : 0 16px;

        ${({length}) => length > 1 && `&:first-child{
            padding: 0 16px 0 0;
        }`}

        ${({length}) => length > 1 && `&:last-child{
            padding: 0 0 0 16px;
        }`}

        ${({length}) => length == 1 && `
            padding: 0;
        `}

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            flex        : 0 0 100%;
            padding     : 16px 0;

            &:first-child,
            &:last-child{
                padding: 8px 0;
            }
        }
    }
`