import React, { Component }     from 'react'
import data                     from '../../../../data.json'
import {v4 as uuidv4}           from 'uuid'
import {FacebookWrapper,
        HistoryWrapper,
        HistoryContainerLeft,
        HistoryContainerRight}  from './index.style'

export default class FacebookContent extends Component {
    state = {
        version : "com" // "com" | "mobile"
    }

    constructor(props){
        super(props);
        this.state.version = window.innerWidth >= 980 ? "com" : "mobile";
    }

    componentDidMount = () => {
        window.addEventListener("resize" , () => {
            this.setState({version : window.innerWidth >= 980 ? "com" : "mobile"})
        })
    }
        
    render() {
        const {version} = this.state;
        return (
            <FacebookWrapper>
                {
                    data.history.map((d , i) =>{
                        return (
                            <HistoryWrapper key = {uuidv4()}>
                                <div className = "left">
                                    {
                                        (i % 2 == 1 && version == "com")? (
                                            <HistoryContainerLeft>
                                                <div className = "ImgContainer">
                                                    <a href = {d.url}>
                                                        <img src={`${process.env.PUBLIC_URL}/asset/facebook/${d.src}`} />
                                                    </a>
                                                </div>
                                                <div>
                                                    <h3>2020<br/><span>{d.date}</span></h3>
                                                    <h3>{d.content}</h3>
                                                </div>
                                            </HistoryContainerLeft>
                                        ) : null
                                    }
                                </div>
                                <div className = "right">
                                    {
                                        (i % 2 == 0 || version == "mobile")? (
                                            <HistoryContainerRight>
                                                <div>
                                                    <h3>2020<br/><span>{d.date}</span></h3>
                                                    <h3>{d.content}</h3>
                                                </div>
                                                <div className = "ImgContainer">
                                                    <a href = {d.url}>
                                                        <img src={`${process.env.PUBLIC_URL}/asset/facebook/${d.src}`} />
                                                    </a>
                                                </div>
                                            </HistoryContainerRight>
                                        ) : null
                                    }
                                </div>
                            </HistoryWrapper>
                        )
                    })
                }
                <div className = "endRow">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </FacebookWrapper>
        )
    }
}


