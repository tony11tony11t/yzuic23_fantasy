import React, { Component } from 'react'
import './index.css'
import Data from '../../../../data.json';
import { v4 as uuidv4 } from "uuid"

export default class Content extends Component {
    
    render() {
        const {project} = Data;
        const {close , index} = this.props;
        return (
            <div className="projectInfo">
                <img src = "./asset/cancel.png" className="close" onClick={close}/>
                <div className="tag">
                    <h4>{project[index].Category}</h4>
                </div>
                <div className="projectContent">
                    <div className="projectTitle">
                        <h1>{project[index].Title}</h1>
                        <p className="hashTag">{project[index].Tag}</p>
                    </div>
                    <img src={`./asset/project/project${index + 1}_img1.jpg`} className="master"/>
                    <div class="projectIntro">
                        <div className="projectLeft">
                            <img src={`./asset/project/project${index + 1}_img2.jpg`}/>
                            <img src={`./asset/project/project${index + 1}_img3.jpg`}/>
                            <h3>指導老師</h3>
                            {project[index].Teacher.map(n => <h4>{n}</h4>)}
                        </div>
                        <div className="projectRight">
                            <h3>設計理念</h3>
                            <p className="description">
                                {project[index].Intro}
                            </p>
                            <h3>作品介紹</h3>
                            <p className="description">
                                {project[index].Content}
                            </p>
                            <div className="iframeContainer">
                                <iframe src="https://www.youtube.com/embed/mBFLZxaPzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <h3>製作團隊</h3>
                    <div className="projectMember">
                        {
                            project[index].Members.map((m , i , arr) => {
                                let flexW = arr.length > 7 || arr.length < 5 ? 20 : (100 / arr.length)
                                return (
                                    <div className="member" style={{flex:`0 0 ${flexW}%`}}>
                                        <img src={`../asset/project/project${index + 1}_m${i + 1}.png`} />
                                        <p className="name">{m.Name}</p>
                                        <p className="job">{m.JobTitle}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div> 
        )
    }
}
