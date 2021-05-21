import React, { Component } from 'react'
import Item from './components/Item'
import styled from 'styled-components'
import MobileMenu from './components/MoblieMenu'
import { v4 as uuidv4 } from 'uuid';

export default class Navbar extends Component {

    state = {
        mobileMenuVisible : false
    }

    navbarItem = [{
        src     : "story",
        chinese : "狂想\n故事",
        english : "Theme\nStory"
    },{
        src     : "project",
        chinese : "展覽\n作品",
        english : "Works Of\nDisplay"
    },{
        src     : "team",
        chinese : "策展\n團隊",
        english : "Curatorial\nTeam"
    },{
        src     : "record",
        chinese : "活動\n紀錄",
        english : "Record"
    },{
        src     : "result",
        chinese : "展覽\n成果",
        english : "Exhibition\nResults"
    }]

    ShowMoblieMenu = () => this.setState({mobileMenuVisible : true})
    HideMoblieMenu = () => this.setState({mobileMenuVisible : false})

    render() {
        const {changePage} = this.props
        const {mobileMenuVisible} = this.state;
        return (
            <>
                <NavbarWrapper>
                    <img src={`${process.env.PUBLIC_URL}/asset/logo.png`} />
                    <NavbarCotainer>
                        {this.navbarItem.map(info => 
                            <Item {...info} 
                                  changePage = {changePage}
                                  key        = {uuidv4()}/>)}
                    </NavbarCotainer>
                    <NavbarCotainer flex ={1}>
                        <a onClick = {changePage.bind(this , "index")}>
                            <img src={`${process.env.PUBLIC_URL}/asset/fixed_home.png`}/>
                        </a>
                        <a href="#">
                            <img src={`${process.env.PUBLIC_URL}/asset/fixed_fb.png`}/>
                        </a>
                    </NavbarCotainer>
                    <MobileMeunBtn onClick = {this.ShowMoblieMenu}/>
                </NavbarWrapper>
                {
                    mobileMenuVisible ? 
                        <MobileMenu navbarItem      = {this.navbarItem} 
                                    changePage      = {changePage}
                                    HideMoblieMenu  = {this.HideMoblieMenu}/> : 
                        null
                }
                
            </>
        )
    }
}

const MobileMeunBtn = styled.div`
    position: absolute;
    right : 1rem;
    display : none;

    &::before{
        content : "";
        width : 40px;
        height: 3px;
        display: block;
        margin-bottom: .5rem;
        background-color: ${({theme}) => theme.colors.white};
    }
    &::after{
        content : "";
        width : 40px;
        height: 3px;
        display: block;
        background-color: ${({theme}) => theme.colors.white};
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        display: block;
    }
`

const NavbarWrapper = styled.div`
    z-index: 100;
    height: 120px;
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 0 2rem;
    align-items: center;
    background-color: #044EB7;

    &>img{
        width: 20%;
        margin-right: 1rem;
        min-width: 12rem;
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        height: 80px;
    }
`;

const NavbarCotainer = styled.div`
    display: flex;
    flex-direction: row;
    flex : ${({flex}) => flex ?? null};
    justify-content: flex-end;

    &>a{
        text-align: center;
        width: 80px;

        img{
            width: 80%;
        }
    }

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        display: none;
    }
`;