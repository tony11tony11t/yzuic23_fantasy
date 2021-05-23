import React, { Component } from 'react'
import {SubNavbarWrapper,
        SubNavbarContainer,
        SelectBlock}        from './index.style'

export default class SubNavBar extends Component {
    state = {
        content : null, 
        index   : 0
    }

    componentDidMount = () => {
        const {data} = this.props;
        this.setState({content : data[0].name});
    }

    changeContent = (name , pos) => {
        const {changePage} = this.props;
        this.setState({
            content : name,
            index   : pos
        });
        changePage(name);

    }

    render() {
        const {content , index} = this.state;
        const {data , width} = this.props;
        return (
            <SubNavbarWrapper width = {width}>
                <SubNavbarContainer length = {data.length}>
                    <SelectBlock index  = {index} 
                                 length = {data.length}/>
                        {data.map((info , i) => {
                            return (
                                <li className = {content === info.name ? "select" : null}
                                    onClick   = {this.changeContent.bind(this , info.name , i)}>
                                        {info.label}
                                </li>
                            )
                        })}
                </SubNavbarContainer>
            </SubNavbarWrapper>
        )
    }
}

