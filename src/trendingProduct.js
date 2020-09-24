import React, { Component } from 'react';


class trendingProduct extends Component {
    render(props) {
        return (
            <div>
                {/* <!-- END SECTION SHOP --> */}
                <div class="section small_pt small_pb">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-xl-3 d-none d-xl-block">
                                <div class="sale-banner">
                                    <a class="hover_effect1" href="#" >
                                        <img src="assets/images/shop_banner_img10.jpg" alt="shop_banner_img10" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-9">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="heading_tab_header">
                                            <div class="heading_s2" >
                                                <h4>Trending products</h4>
                                            </div>
                                            <div class="view_all">
                                                <a href="#" class="text_default"><i class="linearicons-power"></i> <span>View All</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="product_slider carousel_slider owl-carousel owl-theme dot_style1 " data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>

                                    {this.props.trending.map((products) => (
                                        <div class="item" key={products.id}>
                                            <div class="product_wrap">
                                                <div class="product_img">
                                                    <a href="/detail">
                                                        <img class="image" src="assets/images/wall.jpg" alt="el_img2" height="240px" />
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
                    </div>
                </div>
            </div>
        );
    }
}

export default trendingProduct;