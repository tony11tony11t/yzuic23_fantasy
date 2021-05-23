import React, { Component }  from 'react'
import data                  from '../../../../data.json'
import {TeamContainer ,
        TeamIntro}           from './index.style'
import {Cancel , 
        FixedContentWrapper} from '../../../../theme/templete'

export default class Content extends Component {
    
    render() {
        const {close , label} = this.props;
        const info = data.team[label];
        return (
            <FixedContentWrapper>
                <Cancel onClick = {close}/>
                <TeamContainer>
                    <img src={`${process.env.PUBLIC_URL}/asset/team_photo_${label}.jpg`}/>
                    <TeamIntro>
                        <h1>{info.Name}</h1>
                        <h4>{info.Content}</h4>
                        <p className="description">{info.MurMur}</p>
                        <p className="member">{info.Member}</p>
                    </TeamIntro>
                </TeamContainer>
            </FixedContentWrapper> 
        )
    }
}