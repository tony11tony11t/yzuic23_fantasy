import React, { Component } from 'react'
import styled from 'styled-components'
import SubnavBar from '../../SubnavBar'
import ProductContent from './ProductContent'
import FacebookContent from './FacebookContent'
import data from '../../../data.json'

export default class WebResult extends Component {
    state = {
        page : "product", // "product" | "facebook" 
    }

    changePage = page => this.setState({page})


    render() {
        const {page} = this.state;
        return (
            <ResultWrapper>
                <SubnavBar data         = {data.resultSubNavBarItems}
                           changePage   = {this.changePage}
                           width        = {40}/>
                {page === "product" ? <ProductContent /> : <FacebookContent />}
            </ResultWrapper>
        )
    }
}

const ResultWrapper = styled.div`
    margin-top      : 1.5rem;
    display         : flex;
    flex-direction  : column;

`


