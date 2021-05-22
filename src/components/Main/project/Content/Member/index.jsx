import React, { Component } from 'react'
import styled from 'styled-components'

export default class Member extends Component {
    render() {
        const {memberInfo : m , projectIndex , i , flexW} = this.props;
        return (
            <MemberContainer flexW={flexW}>
                <img src        = {`${process.env.PUBLIC_URL}/asset/project/project${projectIndex + 1}_m${i + 1}.png`} 
                     className  = "head"/>
                <h4>{m.Name}</h4>
                <p>{m.JobTitle}</p>
            </MemberContainer>
        )
    }
}

const MemberContainer = styled.div`
    flex        : 0 0 ${({flexW}) => `${flexW}%`};
    text-align  : center;
    
    .head{
        width           : 70%;
        border-radius   : 99999px;
    }

    p{
        white-space: pre-line;
    }
`
