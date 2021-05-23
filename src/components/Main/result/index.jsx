import React, { Component } from 'react'
import SubnavBar from '../../SubnavBar'
import MobileSubnavBar from '../../MobileSubnavBar'
import ProductContent from './ProductContent'
import FacebookContent from './FacebookContent'
import data from '../../../data.json'
import {Wrapper} from '../../../theme/templete'

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
                <SubnavBar data         = {resultSubNavBarItems}
                           changePage   = {this.changePage}
                           width        = {40}/>
                <MobileSubnavBar  data         = {resultSubNavBarItems} 
                                  changePage   = {this.changePage}/>
                {page === "product" ? <ProductContent /> : <FacebookContent />}
            </Wrapper>
        )
    }
}



