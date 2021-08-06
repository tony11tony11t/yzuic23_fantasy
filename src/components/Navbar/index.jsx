import React, { Component } from 'react'

import { v4 as uuidv4 }     from 'uuid';
import {Link}               from 'react-router-dom';

import Item                 from './Item'
import MobileMenu           from './MoblieMenu'
import data                 from '../../data.json'
import {MobileMeunBtn , 
        NavbarWrapper , 
        NavbarCotainer}     from './index.style'

export default class Navbar extends Component {

    state = {
        mobileMenuVisible : false
    }

    ShowMoblieMenu = () => this.setState({mobileMenuVisible : true})
    HideMoblieMenu = () => this.setState({mobileMenuVisible : false})

    render() {
        const {mobileMenuVisible} = this.state;
        const {navBarItems} = data;

        return (
            <>
                <NavbarWrapper>
                    <Link to = {`/`}>
                        <img src = {`${process.env.PUBLIC_URL}/asset/logo.png`}/>
                    </Link>
                    <NavbarCotainer>
                        {navBarItems.map(info => 
                            <Item {...info}
                                  key = {uuidv4()}/>)}
                    </NavbarCotainer>
                    <MobileMeunBtn onClick = {this.ShowMoblieMenu}/>
                </NavbarWrapper>
                <MobileMenu HideMoblieMenu  = {this.HideMoblieMenu}
                            active          = {mobileMenuVisible}/> 
            </>
        )
    }
}