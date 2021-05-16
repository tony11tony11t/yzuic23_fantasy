import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        const {changePage} = this.props;
        return (
            <div className="fixedLink">
                <a href="#"><img src="./asset/fixed_fb.png"/></a>
                <a onClick = {changePage.bind(this , "index")}><img src="./asset/fixed_home.png"/></a>
            </div>
        )
    }
}
