import React, { Component } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

export default class MoblieMenu extends Component {

    ItemClick = (page) => {
        const {changePage , HideMoblieMenu} = this.props
        changePage.bind(this , page)();
        HideMoblieMenu();
    }

    render() {
        const {navbarItem , HideMoblieMenu} = this.props
        return (
            <MoblieMenuWrapper>
                <img src={`${process.env.PUBLIC_URL}/asset/logoBlue.png`} />
                <img src        = {`${process.env.PUBLIC_URL}/asset/back.png`} 
                     className  = "back" 
                     onClick    = {HideMoblieMenu}/>
                <ul>
                    {navbarItem.map(info => 
                        <li onClick = {this.ItemClick.bind(this , info.src)}
                            key     = {uuidv4()}>
                            {info.chinese.replace(/\n/g , "")}<br/>
                            <span>{info.english}</span>
                        </li>
                    )}
                </ul>
                <div>
                    <a onClick = {this.ItemClick.bind(this , "index")}>
                        <img src={`${process.env.PUBLIC_URL}/asset/fixed_home.png`}/>
                    </a>
                    <a href="#">
                        <img src={`${process.env.PUBLIC_URL}/asset/fixed_fb.png`}/>
                    </a>
                </div>
            </MoblieMenuWrapper>
        )
    }
}

const MoblieMenuWrapper = styled.div`
    width : 100%;
    height: 100%;
    position : fixed;
    background-color: ${({theme}) =>theme.colors.white};
    top: 0;
    left: 0;
    z-index: 101;
    padding : 1rem;

    &>img{
        width: 20%;
        margin: 0 1rem;
        min-width: 12rem;

        &.back{
            width: 40px;
            min-width: 40px;
            position: absolute;
            right: 0;
        }
    }

    ul{
        list-style-type: none;

        li{
            text-align: right;
            margin-right : 2rem;
            padding : .8rem 0;
            font-size:1.4rem;
            color : ${({theme}) => theme.colors.main};
            white-space: normal;

            span{
                font-size:1rem;
            }
        }
    }

    div{
        display: flex;
        justify-content: flex-end;
        margin-right: 2rem;

        a{
            margin : 0 .5rem;
            img{
                width : 50px
            }
        }
    }
`
