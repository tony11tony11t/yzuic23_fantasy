import React, { Component } from 'react'
import SubNavBar            from '../../SubNavBar'
import ProductContent       from './ProductContent'
import FacebookContent      from './FacebookContent'
import data                 from '../../../data.json'
import {Wrapper}            from '../../../theme/templete'

export default class WebResult extends Component {
    state = {
        page : "product", // "product" | "facebook" 
    }

    changePage = page => this.setState({page})

    render() {
        const {page} = this.state;
        const {resultSubNavBarItems} = data;
        return (
            <Wrapper>
                <SubNavBar data         = {resultSubNavBarItems}
                           changePage   = {this.changePage}
                           width        = {40}/>
                {page === "product" ? <ProductContent /> : <FacebookContent />}
            </Wrapper>
        )
    }
}



