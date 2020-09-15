import React, { Component } from 'react';
import Trending from './trendingProduct'
import FtoProduct from './ftoProduct'
import DealOfDay from './dealOfDay'
import Exclusive from './exclusiveProduct'

class main extends Component {
    render() {
        return (
            <div>
                
            
            	<div class="col-lg-3 col-md-4 col-sm-6 col-3">
                	<div class="categories_wrap">
                        <button type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn">
                            <i class="linearicons-menu"></i><span>All Categories </span>
                        </button>
                        <div id="navCatContent" class="nav_cat navbar collapse">
                            <ul> 
                                <li class="dropdown dropdown-mega-menu">
                                    <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-tv"></i> <span>Computer</span></a>
                                    <div class="dropdown-menu">
                                        <ul class="mega-menu d-lg-flex">
                                            <li class="mega-menu-col col-lg-7">
                                                <ul class="d-lg-flex">
                                                    <li class="mega-menu-col col-lg-6">
                                                        <ul> 
                                                            <li class="dropdown-header">Featured Item</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="mega-menu-col col-lg-6">
                                                        <ul>
                                                            <li class="dropdown-header">Popular Item</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-5">
                                                <div class="header-banner2">
                                                    <img src="assets/images/menu_banner1.jpg" alt="menu_banner1" />
                                                    <div class="banne_info">
                                                        <h6>10% Off</h6>
                                                        <h4>New Arrival</h4>
                                                        <a href="#">Shop now</a>
                                                    </div>
                                                </div>
                                                <div class="header-banner2">
                                                    <img src="assets/images/menu_banner2.jpg" alt="menu_banner2" />
                                                    <div class="banne_info">
                                                        <h6>15% Off</h6>
                                                        <h4>Men's Fashion</h4>
                                                        <a href="#">Shop now</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="dropdown dropdown-mega-menu">
                                    <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-responsive"></i> <span>Mobile & Tablet</span></a>
                                    <div class="dropdown-menu">
                                        <ul class="mega-menu d-lg-flex">
                                            <li class="mega-menu-col col-lg-7">
                                                <ul class="d-lg-flex">
                                                    <li class="mega-menu-col col-lg-6">
                                                        <ul> 
                                                            <li class="dropdown-header">Featured Item</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="mega-menu-col col-lg-6">
                                                        <ul>
                                                            <li class="dropdown-header">Popular Item</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-5">
                                                <div class="header-banner2">
                                                    <a href="#"><img src="assets/images/menu_banner4.jpg" alt="menu_banner4" /></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="dropdown dropdown-mega-menu">
                                    <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-camera"></i> <span>Camera</span></a>
                                    <div class="dropdown-menu">
                                        <ul class="mega-menu d-lg-flex">
                                            <li class="mega-menu-col col-lg-7">
                                                <ul class="d-lg-flex">
                                                    <li class="mega-menu-col col-lg-6">
                                                        <ul> 
                                                            <li class="dropdown-header">Featured Item</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="mega-menu-col col-lg-6">
                                                        <ul>
                                                            <li class="dropdown-header">Popular Item</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-5">
                                                <div class="header-banner2">
                                                    <a href="#"><img src="assets/images/menu_banner5.jpg" alt="menu_banner5" /></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="dropdown dropdown-mega-menu">
                                    <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-plugins"></i> <span>Accessories</span></a>
                                    <div class="dropdown-menu">
                                        <ul class="mega-menu d-lg-flex">
                                            <li class="mega-menu-col col-lg-4">
                                                <ul> 
                                                    <li class="dropdown-header">Woman's</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-three-columns.html">Vestibulum sed</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-four-columns.html">Donec porttitor</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-grid-view.html">Donec vitae facilisis</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-list-view.html">Curabitur tempus</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Vivamus in tortor</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-4">
                                                <ul>
                                                    <li class="dropdown-header">Men's</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-cart.html">Donec vitae ante ante</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="checkout.html">Etiam ac rutrum</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="wishlist.html">Quisque condimentum</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="compare.html">Curabitur laoreet</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="cart-empty.html">Vivamus in tortor</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-4">
                                                <ul>
                                                    <li class="dropdown-header">Kid's</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-accordion-style.html">Donec porttitor</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a class="dropdown-item nav-link nav_item" href="coming-soon.html"><i class="flaticon-headphones"></i> <span>Headphones</span></a></li>
                                <li><a class="dropdown-item nav-link nav_item" href="404.html"><i class="flaticon-console"></i> <span>Gaming</span></a></li>
                                <li><a class="dropdown-item nav-link nav_item" href="login.html"><i class="flaticon-watch"></i> <span>Watches</span></a></li>
                                <li><a class="dropdown-item nav-link nav_item" href="register.html"><i class="flaticon-music-system"></i> <span>Home Audio & Theater</span></a></li>
                                <li><a class="dropdown-item nav-link nav_item" href="coming-soon.html"><i class="flaticon-monitor"></i> <span>TV & Smart Box</span></a></li>
                                <li><a class="dropdown-item nav-link nav_item" href="404.html"><i class="flaticon-printer"></i> <span>Printer</span></a></li>
                                <li>
                                	<ul class="more_slide_open">
                                    	<li><a class="dropdown-item nav-link nav_item" href="login.html"><i class="flaticon-fax"></i> <span>Fax Machine</span></a></li>
                                        <li><a class="dropdown-item nav-link nav_item" href="register.html"><i class="flaticon-mouse"></i> <span>Mouse</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <div class="more_categories">More Categories</div> */}
                        </div>
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
                    <Trending trending={this.props.trending}/>
                    <FtoProduct />
                </div >
            </div>
        );
    }
}

export default main;