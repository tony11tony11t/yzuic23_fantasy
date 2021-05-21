import React, { Component } from 'react'
import styled from 'styled-components';

export default class Works extends Component {

    render() {
        const {index} = this.props;
        return (
            <ProjectItem onClick={this.props.show.bind(this , index)}>
                <img src={`${process.env.PUBLIC_URL}/asset/project/project${index}_thumbnail.png`} />
            </ProjectItem>
        )
    }
}
const ProjectItem = styled.div`
    display: inline-block;
    width: 25%;
    max-width: 400px;
    margin-top:-6px;
    cursor: pointer;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        width: 50%;
    }

    img{
        width: 100%;
    }
`
