import React, { Component }  from 'react'
import data                  from '../../../../data.json'
import {TeamContainer ,
        TeamIntro}           from './index.style'
import {Cancel , 
        FixedContentWrapper} from '../../../../theme/templete'

export default class Content extends Component {

    goBack = () => this.props.match.history.goBack();
    
    render() {
        const {label} = this.props.match.match.params;
        const info = data.team[label];
        return (
            <FixedContentWrapper>
                <Cancel onClick = {this.goBack}/>
                {<TeamContainer>
                    <img src={`${process.env.PUBLIC_URL}/asset/team_photo_${label}.jpg`}/>
                    <TeamIntro>
                        <h1>{info.Name}</h1>
                        <h3 className="content">{info.Content}</h3>
                        <h3 className="description">{info.MurMur}</h3>
                        <h3 className="member">{info.Member}</h3>
                    </TeamIntro>
                </TeamContainer>}
            </FixedContentWrapper> 
        )
    }
}