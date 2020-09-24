import React, { Component } from 'react'

export default class categories extends Component {
    render() {
        return (
            <div class="categories_wrap">
                <button type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn collapsed">
                    <i class="linearicons-menu"></i><span>all Categories </span>
                </button>

                <div id="navCatContent" class="nav_cat navbar collapse">
                    <ul>
                        <li class="dropdown dropdown-mega-menu">
                            <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-tv"></i> <span>Homeopathic</span></a>
                            <div class="dropdown-menu">
                                <ul class="mega-menu d-lg-flex">
                                    <li class="mega-menu-col col-lg-7">
                                        <ul class="d-lg-flex">
                                            <li class="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li class="dropdown-header"> Non-prescription drugs</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                    <li ><a class="dropdown-item nav-link nav_item" href="category" style={{ color: 'red', fontSize: '10px' }}>view all</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li class="dropdown-header">Prescription drugs</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                    <li ><a style={{ color: 'red', fontSize: '10px' }} class="dropdown-item nav-link nav_item" href="category">View all</a></li>
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
                            <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-responsive"></i> <span>Ayuverdic</span></a>
                            <div class="dropdown-menu">
                                <ul class="mega-menu d-lg-flex">
                                    <li class="mega-menu-col col-lg-7">
                                        <ul class="d-lg-flex">
                                            <li class="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li class="dropdown-header"> Non-prescription drugs</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                    <li ><a style={{ color: 'red', fontSize: '10px' }} class="dropdown-item nav-link nav_item" href="#">view all</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li class="dropdown-header">Prescription drugs</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                    <li ><a style={{ color: 'red', fontSize: '10px' }} class="dropdown-item nav-link nav_item" href="#">View all</a></li>
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
                            <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-camera"></i> <span>allopathic</span></a>
                            <div class="dropdown-menu">
                                <ul class="mega-menu d-lg-flex">
                                    <li class="mega-menu-col col-lg-7">
                                        <ul class="d-lg-flex">
                                            <li class="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li class="dropdown-header"> Non-prescription drugs</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                    <li ><a style={{ color: 'red', fontSize: '10px' }} class="dropdown-item nav-link nav_item" href="#">view all</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li class="dropdown-header">Prescription drugs</li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                    <li ><a style={{ color: 'red', fontSize: '10px' }} class="dropdown-item nav-link nav_item" href="#">View all</a></li>
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

                    </ul>
                </div>
            </div>
        )
    }
}
