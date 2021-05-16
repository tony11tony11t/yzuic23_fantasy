import React, { Component } from 'react'
import './index.css'

export default class SubnavBar extends Component {
    state = {
        content : null, 
        bgLeft  : 0
    }
    componentDidMount = () => {
        const {data} = this.props;
        this.setState({content : data[0].name})
    }

    changeContent = (name , pos) => {
        const {changePage} = this.props;
        this.setState({
            content : name,
            bgLeft  : pos * 8
        });
        changePage(name);

    }

    render() {
        const {content , bgLeft} = this.state;
        const {data , theme} = this.props;
        return (
            <div className={`subnavBar ${theme}`}>
                <ul>
                    <div className="selectBg" style={{left : `${bgLeft}rem`}}></div>
                    {data.map((info , i) => {
                        return (
                            <li className = {content === info.name ? "select" : null}
                                onClick   = {this.changeContent.bind(this , info.name , i)}>
                                    {info.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
