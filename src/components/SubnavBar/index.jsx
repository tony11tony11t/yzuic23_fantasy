import React, { Component } from 'react'
import styled from 'styled-components';

export default class SubnavBar extends Component {
    state = {
        content : null, 
        bgLeft  : 0,
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
            bgLeft  : pos * 7,
            index   : pos
        });
        changePage(name);

    }

    render() {
        const {content , bgLeft , index} = this.state;
        const {data} = this.props;
        return (
            <SubNavbarWrapper length = {data.length}>
                <ul>
                    <SelectBlock index = {index} length = {data.length}/>
                    {data.map((info , i) => {
                        return (
                            <li className = {content === info.name ? "select" : null}
                                onClick   = {this.changeContent.bind(this , info.name , i)}>
                                    {info.label}
                            </li>
                        )
                    })}
                </ul>
            </SubNavbarWrapper>
        )
    }
}

const SubNavbarWrapper = styled.div`
    display: inline-block;
    width: 100%;

    ul{
        list-style: none;
        display: flex;
        border:solid #044EB7 .1rem;
        border-radius: 99px;
        padding: 0;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        margin: 0 0 1rem 0;

        li{
            width: ${({length}) => `${100 / length}%`};
            padding: .4rem 0;
            text-align: center;
            color: #044EB7;
            font-size: .8rem;
            font-weight: 600;
            transition: all 0.5s ease-in-out;
            position: relative;
            cursor: pointer;

            &.select{
                color: #fff;
            }
        }
    }
`

const SelectBlock = styled.div`
    background-color: #044EB7;
    border-radius: 99px;
    width: ${({length}) => `${100 / length}%`};
    height: 100%;
    position: absolute;
    transition: all 1s;
    left : ${({index , length}) => `${100 / length * index}%`};
`
