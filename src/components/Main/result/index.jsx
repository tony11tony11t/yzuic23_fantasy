import React, { Component } from 'react'
import styled from 'styled-components'
import SubnavBar from '../../SubnavBar'
import ProductContent from './ProductContent'
import FacebookContent from './FacebookContent'

export default class WebResult extends Component {
    state = {
        page : "product", // "product" | "facebook" 
    }

    subNavBarItems = [{
        name : "product",
        label : "周邊商品"
    },{
        name : "facebook",
        label : "回顧歷程"
    }]

    changePage = page => this.setState({page})


    render() {
        const {page} = this.state;
        return (
            <ResultWrapper>
                <div className="subNavbarWrapper">
                    <SubnavBar data         = {this.subNavBarItems}
                               changePage   = {this.changePage}/>
                </div>
                {page === "product" ? <ProductContent /> : <FacebookContent />}
            </ResultWrapper>
        )
    }
}

const ResultWrapper = styled.div`
    margin-top: 2rem;

    .subNavbarWrapper{
        width: 100%;
        max-width: 400px;
        margin : 0 5%;
    }
`


