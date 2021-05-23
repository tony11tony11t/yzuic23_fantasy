import React, { Component } from 'react'
import LaptopSubNavBar from './LaptopSubNavBar'
import MobileSubNavBar from './MobileSubNavBar'

export default class SubNavBar extends Component {
    state = {
        device : window.innerWidth > 980 ? "laptop" : "mobile"
    }

    componentDidMount = () => {
        window.addEventListener("resize" , () => {
            this.setState({device : window.innerWidth > 980 ? "laptop" : "mobile"});
        })
    }
    render() {
        const {device} = this.state
        return (
           <>
            {device === "laptop" ? <LaptopSubNavBar {...this.props}/> : <MobileSubNavBar {...this.props}/>}
           </>
        )
    }
}
