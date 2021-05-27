import React, { Component } from 'react'
import {v4 as uuidv4}       from 'uuid'
import TeamButton           from './TeamButton'
import Content              from './Content'
import {CategoryWrapper}    from './index.style'
import data                 from '../../../data.json'
import {Route , Switch}     from 'react-router-dom'


export default class WebTeam extends Component {


    showContent = label => {
        this.setState({
            contentVisible  : true,
            contentLabel    : label
        });
    }
    
    render() {

        return (
            <>
                <CategoryWrapper>
                    {Object.keys(data.team).map(label => 
                        <TeamButton label   = {label} 
                                    show    = {this.showContent}
                                    key     = {uuidv4()}/>

                    )}       
                </CategoryWrapper>
                <Switch>
                    <Route  path     = {`/team/:label`}
                            children = {(match) => (
                                <Content match = {match}/>
                            )} />
                </Switch>
            </>
        )
    }
}
