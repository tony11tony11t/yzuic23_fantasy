import React, { Component } from 'react'
import {ProjectItem}        from './index.style'

export default class Works extends Component {

    render() {
        const {index} = this.props;
        return (
            <ProjectItem onClick={this.props.show.bind(this , index)}>
                <img src = {`${process.env.PUBLIC_URL}/asset/project/project${index}_thumbnail.png`} />
            </ProjectItem>
        )
    }
}

