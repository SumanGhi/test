import React, { Component } from 'react';
import Trending from './trendingProduct'
import FtoProduct from './ftoProduct'
import DealOfDay from './dealOfDay'
import Exclusive from './exclusiveProduct'
import Categories from '../../categories'
import Navbar from '../../navbar'

class main extends Component {
    render() {
        return (
            <div >
                <div class="row bottom_header dark_skin main_menu_uppercase border-top border-bottom " style={{width:'100%'}}>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-3">
                        <Categories />
                        
                    </div>
                    <div class="col-lg-9 col-md-8 col-sm-6 col-9">
                        {/* <Navbar /> */}
                    </div>
                </div>
                {/* <!-- START SECTION BANNER --> */}
                <div class="mt-4 staggered-animation-wrap">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-lg-7 offset-lg-3">
                                <div class="banner_section shop_el_slider">
                                    <div id="carouselExampleControls" class="carousel slide carousel-fade light_arrow" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active background_bg" data-img-src="assets/images/banner13.jpg">
                                                <img src="assets/images/banner13.jpg" alt="" />
                                                <div class="banner_slide_content banner_content_inner">
                                                    <div class="col-lg-7 col-10">
                                                        <div class="banner_content3 overflow-hidden">
                                                            <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off Today Only!</h5>
                                                            <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Dual Camera 20MP</h2>
                                                            <h4 class="staggered-animation mb-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span class="price">$45.00</span><del>$55.25</del></h4>
                                                            <a class="btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item background_bg" >
                                                <img src="assets/images/banner14.jpg" alt="" />
                                                <div class="banner_slide_content banner_content_inner">
                                                    <div class="col-lg-8 col-10">
                                                        <div class="banner_content3 overflow-hidden">
                                                            <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all products</h5>
                                                            <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Smart Watches</h2>
                                                            <h4 class="staggered-animation mb-3 mb-sm-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span class="price">$45.00</span><del>$55.25</del></h4>
                                                            <a class="btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item background_bg" >
                                                <img src="assets/images/banner15.jpg" alt="" />
                                                <div class="banner_slide_content banner_content_inner">
                                                    <div class="col-lg-8 col-10">
                                                        <div class="banner_content3 overflow-hidden">
                                                            <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Taking your Viewing Experience to Next Level</h5>
                                                            <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Beat Headphone</h2>
                                                            <h4 class="staggered-animation mb-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span class="price">$45.00</span><del>$55.25</del></h4>
                                                            <a class="btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ol class="carousel-indicators indicators_style3">
                                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 d-none d-lg-block">
                                <div class="shop_banner2 el_banner1">
                                    <a href="#" class="hover_effect1">
                                        <div class="el_title text_white">
                                            <h6>iphone Collection</h6>
                                            <span>25% off</span>
                                        </div>
                                        <div class="el_img">
                                            <img src="assets/images/shop_banner_img6.png" alt="shop_banner_img6" />
                                        </div>
                                    </a>
                                </div>
                                <div class="shop_banner2 el_banner2">
                                    <a href="#" class="hover_effect1">
                                        <div class="el_title text_white">
                                            <h6>MAC Computer</h6>
                                            <span><u>Shop Now</u></span>
                                        </div>
                                        <div class="el_img">
                                            <img src="assets/images/shop_banner_img7.png" alt="shop_banner_img7" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SECTION BANNER --> */}

                {/* <!-- END MAIN CONTENT --> */}
                <div class="main_content">

                    <Exclusive />


                    {/* <!-- START SECTION BANNER -->  */}
                    <div class="section pb_20 small_pt">
                        <div class="custom-container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="sale-banner mb-3 mb-md-4">
                                        <a class="hover_effect1" href="#">
                                            <img src="assets/images/shop_banner_img7.jpg" alt="shop_banner_img7" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="sale-banner mb-3 mb-md-4">
                                        <a class="hover_effect1" href="#">
                                            <img src="assets/images/shop_banner_img8.jpg" alt="shop_banner_img8" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="sale-banner mb-3 mb-md-4">
                                        <a class="hover_effect1" href="#">
                                            <img src="assets/images/shop_banner_img9.jpg" alt="shop_banner_img9" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END SECTION BANNER -->  */}
                    <DealOfDay />
                    <Trending trending={this.props.trending} />
                    <FtoProduct />
                </div >
            </div>
        );
    }
}

export default main;