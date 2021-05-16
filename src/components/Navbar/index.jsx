import React, { Component } from 'react'
import Item from './components/Item'
import './index.css'

export default class Navbar extends Component {
    navbarItem = [{
        src     : "story",
        chinese : "狂想故事",
        english : "Story"
    },{
        src     : "project",
        chinese : "展覽作品",
        english : "Project"
    },{
        src     : "team",
        chinese : "策展團隊",
        english : "Team"
    },{
        src     : "record",
        chinese : "活動紀錄",
        english : "Record"
    }]
    render() {
        const {changePage} = this.props
        return (
            <div className="NavbarWrapper">
                <div className="Navbar">
                    {this.navbarItem.map(info => 
                        <Item {...info} changePage = {changePage}/>)}
                </div>
            </div>
        )
    }
}
