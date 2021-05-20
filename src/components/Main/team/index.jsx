import React, { Component } from 'react'
import TeamButton from './TeamButton'
import Content from './Content'
import styled from 'styled-components';

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
            <>
                <CategoryWrapper>
                    {this.TeamButtons.map(label => <TeamButton label = {label} show={this.showContent}/>)}       
                </CategoryWrapper>
                {contentVisible ? <Content close={this.hideContent} label={contentLabel}/> : null}
            </>
        )
    }
}

const CategoryWrapper = styled.div`
    display: flex;
    height: 100%;
    padding : 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`
