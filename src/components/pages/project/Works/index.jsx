import React, { Component } from 'react'
import {ProjectItem}        from './index.style'
import {Link}               from 'react-router-dom'

export default class Works extends Component {

    render() {
        const {index , info} = this.props;
        return (
            <Link to = {`/project/${index}`}>
                <ProjectItem title   = {info.Title}>
                    <img src = {`${process.env.PUBLIC_URL}/asset/project/project${index}_thumbnail.png`} />
                </ProjectItem>
            </Link>
        )
    }
}

