import React, { Component } from 'react'
import yes from '../myList.json'

export default class subCategory2 extends Component {

    
    state = {
        selectedTabId: 1,
        selectedCategoryId: 0
    }

    isActive = (id) => {
        return (this.state.selectedTabId === id)

    }

    setActiveTab = (selectedTabId) => {
        this.setState({ selectedTabId });        
        

    }
    setCategoryTab = (selectedCategoryId) => {
        this.setState({ selectedCategoryId })    
    }
    
    render() {
        return (
            <div>
                {/* <!-- START SECTION BREADCRUMB --> */}
                <div class="breadcrumb_section bg_gray page-title-mini">
                    <div class="container">
                        {/* <!-- STRART CONTAINER --> */}
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="page-title">
                                    <h1>Category</h1>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <ol class="breadcrumb justify-content-md-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item active">Category</li>
                                </ol>
                            </div>
                        </div>
                        {/* </div><!-- END CONTAINER--> */}
                    </div>
                </div>
                {/* <!-- END SECTION BREADCRUMB --> */}
                
                <div class="container row">
                    <div class="col-sm-4 category">
                        <ul>
                            {yes.category.map((yes) =>
                            <div key={yes.id} class={this.isActive(yes.id) ? "sub-category sactive" : 'sub-category'}
                                onClick={this.setActiveTab.bind(this, yes.id)}>

                                <li >
                                    <div> {yes.name} </div><div class={this.isActive(yes.id) ? "forward" : ""}></div>
                                </li>

                            </div>)}
                         </ul>
                    </div>

                    
                    <div class="col generic_list" >
                        {yes.category.map((yes) =>
                        <div class={this.isActive(yes.id) ? "genric_active" : 'generic'}>
                        {yes["sub-category"].map((sub)=>
                        <div key={sub.id} style={{marginTop:'12px'}}>
                        <a href={"brand"+this.state.selectedTabId+"&"+this.state.selectedCategoryId}><h4 onClick={this.setCategoryTab.bind(this,sub.id)}>- {sub.name}</h4></a>
                        </div>)}
                        </div>
                        )}
                    </div> 
                </div>
               
            </div>
        )
    }
}
