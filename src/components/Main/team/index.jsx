import React, { Component } from 'react'
import TeamButton from './TeamButton'
import Content from './Content'
import styled from 'styled-components';
import data from '../../../data.json'


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
                    {Object.keys(data.team).map(label => <TeamButton label = {label} show={this.showContent}/>)}       
                </CategoryWrapper>
                {contentVisible ?   <Content close = {this.hideContent} 
                                             label = {contentLabel}/> : 
                                    null}
            </>
        )
    }
}

const CategoryWrapper = styled.div`
    display         : flex;
    height          : 100%;
    padding         : 20px;
    flex-wrap       : wrap;
    justify-content : center;
    align-content   : center;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        align-content   : flex-start;
        margin-bottom   : 1rem;
        height          : auto;
    }
`
