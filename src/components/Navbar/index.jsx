import React, { Component } from 'react'
import Item from './components/Item'
import styled from 'styled-components'

export default class Navbar extends Component {
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
    render() {
        const {changePage} = this.props
        return (
            <NavbarWrapper>
                <img src={`${process.env.PUBLIC_URL}/asset/logo.png`} />
                <NavbarCotainer>
                    {this.navbarItem.map(info => 
                        <Item {...info} changePage = {changePage}/>)}
                </NavbarCotainer>
                <NavbarCotainer flex ={1}>
                    <a onClick = {changePage.bind(this , "index")}>
                        <img src={`${process.env.PUBLIC_URL}/asset/fixed_home.png`}/>
                    </a>
                    <a href="#">
                        <img src={`${process.env.PUBLIC_URL}/asset/fixed_fb.png`}/>
                    </a>
                </NavbarCotainer>
            </NavbarWrapper>
        )
    }
}

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
`;