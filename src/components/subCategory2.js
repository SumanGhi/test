import React, { Component } from 'react'
import yes from '../myList.json'

export default class subCategory2 extends Component {

    state = {
        selectedTabId: ''
    }

    isActive = (id) => {
        console.log(id)
        return (this.state.selectedTabId === id)

    }

    setActiveTab = (selectedTabId) => {
        this.setState({ selectedTabId });
    }

    render() {
        return (
            <div class="container row">
                <div class="col category">
                    <ul>{yes.trending.map((yes) =>
                        <div key={yes.id} class={this.isActive(yes.id) ? "sub-category lactive" : 'sub-category'}
                            onClick ={this.setActiveTab.bind(this, yes.id)}>

                            <li >
                                <div>{yes.name} </div><div class={this.isActive(yes.id) ? "forward" : ""}></div>
                            </li>

                        </div>)} </ul>
                </div>

                <div class="col">
                    <h1>Yes</h1>
                </div>
            </div>
        )
    }
}
