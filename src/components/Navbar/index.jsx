import React, { Component } from 'react'
import Item from './components/Item'
import styled from 'styled-components'
import MobileMenu from './components/MoblieMenu'
import data from '../../data.json'
import { v4 as uuidv4 } from 'uuid';

export default class Navbar extends Component {

    state = {
        mobileMenuVisible : false
    }

    ShowMoblieMenu = () => this.setState({mobileMenuVisible : true})
    HideMoblieMenu = () => this.setState({mobileMenuVisible : false})

    render() {
        const {changePage}  = this.props
        const {mobileMenuVisible} = this.state;
        const {navBarItem} = data;

        return (
            <>
                <NavbarWrapper>
                    <img src={`${process.env.PUBLIC_URL}/asset/logo.png`} />
                    <NavbarCotainer>
                        {navBarItem.map(info => 
                            <Item {...info} 
                                  changePage = {changePage}
                                  key        = {uuidv4()}/>)}
                    </NavbarCotainer>
                    <NavbarCotainer flex ={1}>
                        <a onClick = {changePage.bind(this , "index")} href="#">
                            <img src={`${process.env.PUBLIC_URL}/asset/fixed_fb.png`}/>
                        </a>
                    </NavbarCotainer>
                    <MobileMeunBtn onClick = {this.ShowMoblieMenu}/>
                </NavbarWrapper>
                {
                    mobileMenuVisible ? 
                        <MobileMenu changePage      = {changePage}
                                    HideMoblieMenu  = {this.HideMoblieMenu}/> : 
                        null
                }
            </>
        )
    }
}

const MobileMeunBtn = styled.div`
    position            : absolute;
    right               : 1rem;
    display             : none;

    &::before,
    &::after{
        content             : "";
        width               : 40px;
        height              : 3px;
        display             : block;
        background-color    : ${({theme}) => theme.colors.white};
    }

    &::before{
        margin-bottom       : .5rem;
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        display             : block;
    }
`

const NavbarWrapper = styled.div`
    z-index             : ${({theme}) => theme.zIndex.higher};
    height              : ${({theme}) => theme.navBar.height}px;
    display             : flex;
    flex-direction      : row;
    position            : relative;
    padding             : 0 ${({theme}) => theme.page.padding}px;
    align-items         : center;
    background-color    : ${({theme}) => theme.colors.main};

    &>img{
        width           : 16%;
        min-width       : 280px;
        margin-right    : 20px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            min-width   : 250px;
        }
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height          : ${({theme}) => theme.navBar.bellow980.height}px;
        padding         : 0 ${({theme}) => theme.page.bellow980.padding}px;
    }
`;

const NavbarCotainer = styled.div`
    display             : flex;
    flex-direction      : row;
    flex                : ${({flex}) => flex ?? null};
    justify-content     : flex-end;
    width               : 548px;

    &>a{
        text-align      : center;
        width           : 50px;

        img{
            width       : 100%;
        }
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        display         : none;
    }
`;