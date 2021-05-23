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
        const {navBarItems} = data;
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
                    {navBarItems.map(info => 
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
            cursor      : pointer;

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
            margin-right    : ${({theme}) => theme.page.bellow980.padding + 40}px;
            font-size       : ${({theme}) => theme.fontSize.bellow980.h3}px;
            line-height     : ${({theme}) => theme.fontSize.bellow980.h3 * 1.4}px;
            color           : ${({theme}) => theme.colors.main};
            text-align      : right;
            padding         : 20px 0;
            white-space     : normal;
            letter-spacing  : 2px;
            cursor          : pointer;

            span{
                font-size       : ${({theme}) => theme.fontSize.bellow980.h4}px;
                letter-spacing  : 1px;
            }
        }
    }

    a{
        img{
            width : 50px
        }
    }
`
