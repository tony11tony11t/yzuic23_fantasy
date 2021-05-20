import React, { Component } from 'react'
import styled from 'styled-components'
import SubnavBar from '../../SubnavBar'

export default class WebResult extends Component {
    state = {
        page : "theme", // "rookie" | "chubby" | "boomboom" | "fantasy" | "theme"
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
        return (
            <ResultWrapper>
                <div className="subNavbarWrapper">
                    <SubnavBar data         = {this.subNavBarItems}
                               changePage   = {this.changePage}/>
                </div>
            </ResultWrapper>
        )
    }
}

const ResultWrapper = styled.div`
    margin-top: 2rem;

    .subNavbarWrapper{
        width: 100%;
        max-width: 400px;
        margin : 0 2.5%;
    }
`
