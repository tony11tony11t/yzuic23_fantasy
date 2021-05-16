import React, { Component } from 'react'
import Title from '../../Title'
import TeamButton from './TeamButton'
import Content from './Content'
import './index.css'

export default class WebTeam extends Component {
    TeamButtons = ["admin" , "active" , "art" , "GA" , "place" , "PR"];

    state = {
        contentVisible : false,
        content : null
    }

    showContent = label => {
        this.setState({
            contentVisible : true,
            contentLabel : label
        });
    }
    hideContent = () => this.setState({contentVisible : false});
    
    render() {
        const {contentVisible , contentLabel} = this.state;

        return (
            <div>
                <Title chinese="策展團隊" english="Team"/>
                <div className="categoryWrapper">
                    {this.TeamButtons.map(label => <TeamButton label = {label} show={this.showContent}/>)}       
                </div>
                {contentVisible ? <Content close={this.hideContent} label={contentLabel}/> : null}
            </div>
        )
    }
}
