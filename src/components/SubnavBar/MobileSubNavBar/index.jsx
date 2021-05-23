import React, { Component } from 'react'
import { v4 as uuidv4 }     from "uuid"
import {SubNavbarWrapper,
        SubNavbarContainer,
        SelectBlock}        from './index.style'

export default class MobileSubNavBar extends Component {
    state = {
        content     : null, 
        menuVisible : false
    }

    constructor(props){
        super(props);
        const {data} = this.props;
        this.state.content = data[0].name;
    }

    changeContent = (name) => {
        const {changePage} = this.props;
        this.setState({
            content : name,
        });
        
        this.changeMenuVisible()
        changePage(name);
    }

    changeMenuVisible = () => {
        const {menuVisible} = this.state;
        this.setState({menuVisible : !menuVisible})
    }

    render() {
        const {content , menuVisible} = this.state;
        const {data} = this.props;
        return (
            <SubNavbarWrapper>
                <SelectBlock onClick = {this.changeMenuVisible} menuVisible = {menuVisible}>
                    {data.find(d => d.name == content).label}
                </SelectBlock>
                {
                    menuVisible ? <SubNavbarContainer length = {data.length}>
                                    {data.map((info) => {
                                        return (
                                            <li key = {uuidv4()}
                                                className = {content === info.name ? "select" : null}
                                                onClick   = {this.changeContent.bind(this , info.name)}>
                                                    {info.label}
                                            </li>
                                        )
                                    })}
                                </SubNavbarContainer>
                                : null
                }
            </SubNavbarWrapper>
        )
    }
}