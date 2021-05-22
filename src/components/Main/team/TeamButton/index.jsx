import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';

export default class TeamButton extends Component {
    render() {
        const {label , show} = this.props;
        return (
            <TeamButtonWrapper onClick={show.bind(this , label)}>
                <div className="head">
                    <img src={`${process.env.PUBLIC_URL}/asset/team_img_${label}.png`}/>
                </div>
                <div className="text">
                    <img src={`${process.env.PUBLIC_URL}/asset/team_txt_${label}.png`} />
                </div>
            </TeamButtonWrapper>

        )
    }
}

const HeadShake = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(10deg);
    }
    50%{
        transform: rotate(0deg);
    }
    75%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;

const TeamButtonWrapper = styled.div`
    background-image    : ${`url('${process.env.PUBLIC_URL}/asset/team_bg.png')`};
    border-radius       : 30px;
    flex                : 0 0 40%;
    display             : flex;
    padding             : 20px 2%;
    margin              : 20px 2%;

    @media ${({theme}) => theme.mediaQueries.bellow980} {
        flex            : 0 0 100%;
    }

    .head{
        flex        : 1;
        align-self  : center;
        text-align  : center;

        img{
            width   : 70%;
        }
    }
    .text{
        flex        : 2;
        align-self  : center;

        img{
            width   : 90%;
        }
    }

    &:hover{
        .head{
            img{
                animation-name              : ${HeadShake};
                animation-duration          : 1s;
                animation-timing-function   : linear;
                transform-origin            : bottom;
            }
        }
    }

`
