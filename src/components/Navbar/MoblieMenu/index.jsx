import React, { Component }     from 'react'
import { v4 as uuidv4 }         from 'uuid';
import {Link}                   from 'react-router-dom'
import data                     from '../../../data.json'
import {MoblieMenuWrapper}      from './index.style'

export default class MoblieMenu extends Component {

    ItemClick = () => {
        const {HideMoblieMenu} = this.props
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
                        <Link to = {{
                            pathname : `/${info.src}`, 
                            state    : {name : info.src}
                        }}>
                            <li onClick = {HideMoblieMenu}
                                key     = {uuidv4()}>
                                {info.chinese.replace(/\n/g , "")}<br/>
                                <span>{info.english}</span>
                            </li>
                        </Link>
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


