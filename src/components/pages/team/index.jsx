import React, { Component } from 'react'
import {v4 as uuidv4}       from 'uuid'
import TeamButton           from './TeamButton'
import Content              from './Content'
import {CategoryWrapper}    from './index.style'
import data                 from '../../../data.json'


export default class WebTeam extends Component {

    state = {
        contentVisible : false,
        content        : null
    }

    showContent = label => {
        this.setState({
            contentVisible  : true,
            contentLabel    : label
        });
    }
    hideContent = () => this.setState({contentVisible : false});
    
    render() {
        const {contentVisible , contentLabel} = this.state;

        return (
            <>
                <CategoryWrapper>
                    {Object.keys(data.team).map(label => 
                        <TeamButton label   = {label} 
                                    show    = {this.showContent}
                                    key     = {uuidv4()}/>

                    )}       
                </CategoryWrapper>
                {contentVisible ?   <Content close = {this.hideContent} 
                                             label = {contentLabel}/> : 
                                    null}
            </>
        )
    }
}
