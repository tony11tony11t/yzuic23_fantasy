import React, { Component } from 'react'
import styled from 'styled-components';

export default class SubnavBar extends Component {
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

const SubNavbarWrapper = styled.div`
    display     : inline-block;
    width       : ${({width}) => width ?? 100}%;
    margin      : auto;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        display : none;
    }
`

const SubNavbarContainer = styled.ul`
    list-style          : none;
    display             : flex;
    border              : solid .1rem ${({theme}) => theme.colors.main};
    border-radius       : 99px;
    position            : relative;
    overflow            : hidden;
    background-color    : ${({theme}) => theme.colors.white};
    margin-bottom       : 1rem;

    li{
        width           : ${({length}) => `${100 / length}%`};
        color           : ${({theme}) => theme.colors.main};
        font-size       : ${({theme}) => theme.fontSize.subTitle}px;
        padding         : .8rem 0;
        text-align      : center;
        font-weight     : 600;
        transition      : all 0.5s ease-in-out;
        position        : relative;
        cursor          : pointer;

        &.select{
            color       : ${({theme}) => theme.colors.white};
        }
    }
`

const SelectBlock = styled.div`
    background-color    : ${({theme}) => theme.colors.main};
    border-radius       : 99px;
    width               : ${({length}) => `${100 / length}%`};
    height              : 100%;
    position            : absolute;
    transition          : all 1s;
    left                : ${({index , length}) => `${100 / length * index}%`};
`
