import React, { Component } from 'react'
import {TeamButtonWrapper} from './index.style'
import {Link}               from 'react-router-dom'

export default class TeamButton extends Component {
    render() {
        const {label , show} = this.props;
        return (
            <Link to = {`/team/${label}`}>
                <TeamButtonWrapper onClick={show.bind(this , label)}>
                    <div className="head">
                        <img src={`${process.env.PUBLIC_URL}/asset/team_img_${label}.png`}/>
                    </div>
                    <div className="text">
                        <img src={`${process.env.PUBLIC_URL}/asset/team_txt_${label}.png`} />
                    </div>
                </TeamButtonWrapper>
            </Link>

        )
    }
}


