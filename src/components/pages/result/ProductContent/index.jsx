import React, { Component }     from 'react'
import data                     from '../../../../data.json'
import {v4 as uuidv4}           from 'uuid'
import {ProductWrapper , 
        ProductContainer , 
        ProductImgContainer}    from './index.style'

export default class ProductContent extends Component {
    render() {
        return (
            <ProductWrapper>
                {
                    data.product.map((d , i) => {
                        return (
                            <ProductContainer length = {d.src.length} index = {i}>
                                <h4>{d.name}</h4>
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