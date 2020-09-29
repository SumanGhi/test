import React, { Component } from 'react'
import Categories from '../categories'
import yes from '../myList.json'



export default class brand extends Component {
    state = {
        selectedTabId: this.props.productId,
        selectedCategoryId: this.props.categoryId
    }
    
    isActive = (id) => {
        return (this.state.selectedTabId === id)

    }
    activeCategory = (id)=>{
        return (this.state.selectedCategoryId === id)
    }
    setCategoryeTab = (selectedCategoryId) => {
        this.setState({ selectedCategoryId });
    }
    setActiveTab = (selectedTabId) => {
        let selectedCategoryId=''
        this.setState({ selectedTabId,selectedCategoryId });
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
                                    <h1>Product</h1>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <ol class="breadcrumb justify-content-md-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item"><a href="#">Category</a></li>
                                    <li class="breadcrumb-item active">Product</li>
                                </ol>
                            </div>
                        </div>
                        {/* </div><!-- END CONTAINER--> */}
                    </div>
                </div>
                {/* <!-- END SECTION BREADCRUMB --> */}
                <div class="row ">

                    {/* <div class="col-lg-3 col-md-4 col-sm-6 col-3" style={{marginLeft:'10px'}}>
                    <Categories />
                </div> */}

                    <div class="col-sm-4 category">
                        <ul>
                            {yes.category.map((yes) =>
                                <div key={yes.id} class={this.isActive(yes.id) ? "sub-category sactive" : 'sub-category'}
                                    >

                                    <li >
                                        <div >
                                            <div onClick={this.setActiveTab.bind(this, yes.id)} style={{minWidth:'350px'}}>{yes.name}</div>
                                            <div>
                                                <div class={this.isActive(yes.id) ? "genric_active" : 'generic'} style={{minWidth:'300px',padding:'10px', background:'#fff'}}>
                                                    {yes["sub-category"].map((sub) =>
                                                        <div style={{ marginTop: '12px', display:'flex' }}>
                                                            <div class={this.activeCategory(sub.id) ? "sub_active" : ""} onClick={this.setCategoryeTab.bind(this, sub.id)}>- {sub.name}</div>
                                                            <div class={this.activeCategory(sub.id) ? "forward" : ""} ></div>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                            </div>

                                        </div>
                                    </li>

                                </div>)}
                        </ul>
                    </div>

                    <div class="col" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                        {this.props.brands.map((products) => (
                            <div class="item" key={products.id} style={{ margin: '5px 20px 0px 20px' }}>
                                <div class="product_wrap">
                                    <div class="product_img" style={{ height: '200px' }}>
                                        <a href="/detail">
                                            <img class="image" src="assets/images/011.gif" alt="el_img2" height="240px" />
                                            <div class="product_hover_img" >
                                                <ul style={{ fontSize: '9pt' }}>
                                                    <li><b>Brand Name: </b><i>{products.name} </i></li>
                                                    <li><b>Generic Name: </b><i>{products.generic}</i> </li>
                                                    <li><b>Price: </b><i>{products.price}</i> </li>
                                                    <li><b>Composition: </b><i>{products.composition}</i> </li>
                                                    <li><i>{products.detail}</i></li>
                                                </ul>
                                            </div>
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> </a></li>
                                                <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="/detail">{products.name} </a></h6>
                                        <div class="product_price">
                                            <span class="price">Rs.{products.price} </span>
                                            {/* <del>$95.00</del>
                        <div class="on_sale">
                            <span>25% Off</span> */}
                                            {/* </div> */}
                                        </div>
                                        {/* <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style={{ width: '68%' }}></div>
                        </div>
                        <span class="rating_num">(15)</span>
                    </div> */}
                                        <div class="pr_desc">
                                            <p>{products.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}
