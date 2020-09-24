import React, { Component } from 'react'
import Categories from '../categories'


export default class brand extends Component {
    render(props) {
        return (
            <div class="row ">
                <div class="col-lg-3 col-md-4 col-sm-6 col-3" style={{marginLeft:'10px'}}>
                    <Categories />
                </div>
                
                <div class="col-sm-8" style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto'}}>
                    {this.props.brands.map((products) => (
                        <div class="item" key={products.id} style={{ margin:'5px 20px 0px 20px'}}>
                            <div class="product_wrap">
                                <div class="product_img" style={{height:'200px'}}>
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
        )
    }
}
