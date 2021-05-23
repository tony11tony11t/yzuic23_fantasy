import React, { Component } from 'react'
import styled , {keyframes} from 'styled-components'

export default class Role extends Component {
    render() {
        const {src , bg} = this.props
        return (
            <RoleContainer bg = {bg}>
                {bg ? <img className    = "bg" 
                           src          = {`${process.env.PUBLIC_URL}/asset/story_bg.png`} /> : null}
                <img className  = "role" 
                     src        = {`${process.env.PUBLIC_URL}/asset/story_${src}.png`} />
            </RoleContainer>
        )
    }
}

const RoleJump = keyframes`
    from{
        transform : translateY(0px)
    }
    to{
        transform : translateY(-30px);
    }
`

const BgRotate = keyframes`
    from{
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);
    }
`

const RoleContainer = styled.div`
    flex        : 1;
    position    : relative;
    text-align  : center;
    margin      : auto;
    height      : 100%;

    .bg{
        animation-name              : ${BgRotate};
        animation-duration          : 3s;
        animation-iteration-count   : infinite;
        animation-timing-function   : linear;
        position                    : absolute;
        width                       : 50%;
        min-width                   : 350px;
        top                         : 15%;
        transform                   : translateY(-100%);

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            width                   : 100%;
            min-width               : 100%;
        }
    }

    .role{
        animation-name              : ${({bg}) => bg ? RoleJump : null};
        animation-duration          : 0.5s;
        animation-iteration-count   : infinite;
        animation-direction         : alternate-reverse;
        width                       : 50%;
        min-width                   : 350px;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            width                   : 100%;
            min-width               : 100%;
            margin-bottom           : 20px;
        }
    }
`
