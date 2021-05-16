import React, { Component } from 'react'
import './index.css'


export default class Works extends Component {

    render() {
        const {index} = this.props;
        return (
            <div className="project" onClick={this.props.show.bind(this , index)}>
                <img src={`./asset/project/project${index}_thumbnail.png`} />
            </div>
        )
    }
}
