import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../../../data.json'

export default class ProductContent extends Component {
    render() {
        return (
            <ProductWrapper>
                {
                    data.product.map((d , i) => {
                        return (
                            <ProductContainer length = {d.src.length} index = {i}>
                                <h2>{d.name}</h2>
                                <ProductImgContainer length = {d.src.length}>
                                {
                                    d.src.map(s => <img src={`${process.env.PUBLIC_URL}/asset/products/${s}`} />)
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

    width: 90%;
    margin : auto;
    text-align: center;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width: 100%;
    }
    
`

const ProductContainer = styled.div`

    position: relative;
    margin : 2rem 0 3rem 0;
    width: ${({length}) => length > 1 ? "100%" : "50%"};
    display: inline-block;
    padding-left:   ${({length , index}) => length < 2 ? (index % 2 == 1 ? ".8rem" : 0) : 0};
    padding-right:  ${({length , index}) => length < 2 ? (index % 2 == 0 ? ".8rem" : 0) : 0};
    
    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }

    &:last-child{
        padding : 0;
    }

    h2{
        font-size: 1.2rem;
        color : #fff;
        background-color: #044EB7;
        padding : .5rem 1rem;
        position: absolute;
        top : 0;
        transform: translateY(-50%);
        border-radius: .8rem;
        margin : 0;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            font-size: .8rem;
            padding : .3rem .8rem;
            border-radius: .6rem;
        }
    }  
`

const ProductImgContainer = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img{
        width: 1px;
        flex: 1;
        padding: 0 .8rem;

        

        ${({length}) => length > 1 && `&:first-child{
            padding: 0 .8rem 0 0;
        }`}

        ${({length}) => length > 1 && `&:last-child{
            padding: 0 0 0 .8rem;
        }`}

        ${({length}) => length == 1 && `
            padding: 0;
        `}

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            flex: 0 0 100%;
            padding : .8rem 0;

            ${({length}) => length > 1 && `&:first-child{
                padding: 0;
            }`}

            ${({length}) => length > 1 && `&:last-child{
                padding: 0;
            }`}

            ${({length}) => length == 1 && `
                padding: 0;
            `}
        }

    }
`