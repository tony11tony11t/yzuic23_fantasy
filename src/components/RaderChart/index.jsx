import React, { Component } from 'react'
import './index.css'

export default class RaderChart extends Component{

    getPath = (n = 1) => {
        const {size , scale} = this.props;

        let layer           = n * 0.5;
        let start           = 25 * (size - n) * scale;
        let width           = layer * 100 * scale;
        let topHeight       = layer * 40 * scale;
        let bottomHeight    = layer * 55 * scale;
        let bottomOuter     = layer * 20 * scale;

        return <path stroke     = "#044EB7" 
                     fill       = "transparent"
                     stroke-width = "1.5"
                     d          = {`M${start + width / 2},${start} 
                                    L${start + width},${start + topHeight} 
                                    L${start + width - bottomOuter},${start + topHeight + bottomHeight} 
                                    L${start + bottomOuter},${start + topHeight + bottomHeight} 
                                    L${start},${start + topHeight}z`}/>
    }

    getLine = () => {
        const {size , scale} = this.props;

        let layer           = size * 0.5;
        let width           = layer * 100 * scale;
        let topHeight       = layer * 40 * scale;
        let bottomHeight    = layer * 55 * scale;
        let bottomOuter     = layer * 20 * scale;
        let points = [
            [width / 2 , 0],
            [width , topHeight],
            [width - bottomOuter , topHeight + bottomHeight],
            [bottomOuter , topHeight + bottomHeight],
            [0 , topHeight]
        ]
        return points.map(point => {
            return <path stroke     = "rgba(4, 78, 183 , 0.2)" 
                         fill       = "transparent"
                         stroke-dasharray = "3"
                         d          = {`M${point[0]},${point[1]} 
                                        L${width / 2},${51.25 * layer * scale}`}/>
            })
    }

    getScore = () => {
        let {size , scale , data} = this.props;

        let scores = data.map((d , i) => {
            let start           = 25 * (size - d.score) * scale;
            let layer           = d.score * 0.5;
            let width           = layer * 100 * scale;
            let topHeight       = layer * 40 * scale;
            let bottomHeight    = layer * 55 * scale;
            let bottomOuter     = layer * 20 * scale;
            if(i == 0){
                return [start + width / 2 , start]
            }else if(i == 1){
                return [start + width , start + topHeight]
            }else if(i == 2){
                return [start + width - bottomOuter , start + topHeight + bottomHeight]
            }else if(i == 3){
                return [start + bottomOuter , start + topHeight + bottomHeight]
            }else if(i == 4){
                return [start , start + topHeight]
            }
        })
        return <path fill   = "#ffe873bb"
                     className = "score"
                     d      = {`M${scores[0][0]} ${scores[0][1]}
                                L${scores[1][0]} ${scores[1][1]}
                                L${scores[2][0]} ${scores[2][1]}
                                L${scores[3][0]} ${scores[3][1]}
                                L${scores[4][0]} ${scores[4][1]}z`}/>
    }

    getLabel = () => {
        let {size , scale , data} = this.props;

        let layer           = size * 0.5;
        let width           = layer * 100 * scale;
        let topHeight       = layer * 40 * scale;
        let bottomHeight    = layer * 55 * scale;
        let bottomOuter     = layer * 20 * scale;
        let points = [
            [width / 2 , 0],
            [width , topHeight],
            [width - bottomOuter , topHeight + bottomHeight],
            [bottomOuter , topHeight + bottomHeight],
            [0 , topHeight]
        ]
        let transform = [
            [-8 * data[0].label.length , -7] , 
            [3 , 0],
            [0 , 15],
            [-18 * data[3].label.length , 15],
            [-18 * data[4].label.length , 0]
        ];
        return points.map((point , i) => {
            return <text    x = {point[0] + transform[i][0]} 
                            y = {point[1] + transform[i][1]} 
                            fill = "#044eb7">{data[i].label}</text>
            
        })
        
    }
    
    render() {
        const {size , scale} = this.props;
        let paddingHeight = 40;
        let paddingWidth = 60;
        let width = (size * 0.5) * 100 * scale + paddingWidth * 2
        let height = (size * 0.5) * 100 * scale + paddingHeight * 2
        return (
            <svg width  = {width} 
                 height = {height}>
                <g transform={`translate(${paddingWidth},${paddingHeight})`}>
                    {[...Array(size)].map((_ , i) => this.getPath(i + 1))}
                    {this.getLine()}
                    {this.getScore()}
                    {this.getLabel()}
                </g>
            </svg>
        )
    }
}
