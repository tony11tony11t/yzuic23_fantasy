import React, { Component } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import data from '../../../../data.json'

export default class MoblieMenu extends Component {

    ItemClick = (page) => {
        const {changePage , HideMoblieMenu} = this.props
        changePage.bind(this , page)();
        HideMoblieMenu();
    }

    render() {
        const {HideMoblieMenu} = this.props
        return (
            <MoblieMenuWrapper>
                <div className = "header">
                    <img src        = {`${process.env.PUBLIC_URL}/asset/logoBlue.png`}
                        onClick    = {this.ItemClick.bind(this , "index")}/>
                    <img src        = {`${process.env.PUBLIC_URL}/asset/back.png`} 
                        className  = "back" 
                        onClick    = {HideMoblieMenu}/>
                </div>
                <ul>
                    {data.navBarItem.map(info => 
                        <li onClick = {this.ItemClick.bind(this , info.src)}
                            key     = {uuidv4()}>
                            {info.chinese.replace(/\n/g , "")}<br/>
                            <span>{info.english}</span>
                        </li>
                    )}
                    <li>
                        <a href="#">
                            <img src={`${process.env.PUBLIC_URL}/asset/fixed_fb.png`}/>
                        </a>
                    </li>
                </ul>
                
            </MoblieMenuWrapper>
        )
    }
}

const MoblieMenuWrapper = styled.div`
    background-color    : ${({theme}) =>theme.colors.white};
    width               : 100%;
    height              : 100%;
    position            : fixed;
    top                 : 0;
    left                : 0;
    z-index             : ${({theme}) => theme.zIndex.highest};
    overflow            : scroll;

    .header{
        height              : ${({theme}) => theme.navBar.bellow980.height}px;
        padding             : 0 ${({theme}) => theme.page.bellow980.padding}px;
        background-color    : ${({theme}) => theme.colors.white};
        display             : flex;
        flex-direction      : row;
        align-content       : center;
        justify-content     : space-between;
        position            : fixed;
        width               : 100%;

        &>img{
            width       : 16%;
            min-width   : 250px;
            align-self  : center;

            &.back{
                width       : 40px;
                min-width   : 40px;
            }
        }
    }

    

    ul{
        margin-top          : ${({theme}) => theme.navBar.bellow980.height}px;
        list-style-type     : none;

        li{
            text-align      : right;
            margin-right    : ${({theme}) => theme.page.bellow980.padding + 40}px;
            padding         : 1rem 0;
            font-size       : ${({theme}) => theme.fontSize.bellow980.menuTitle}px;
            color           : ${({theme}) => theme.colors.main};
            white-space     : normal;
            letter-spacing  : 2px;

            span{
                font-size   : ${({theme}) => theme.fontSize.bellow980.menuSubTitle}px;
            }
        }
    }

    a{
        img{
            width : 50px
        }
    }
`
