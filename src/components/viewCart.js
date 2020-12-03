import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart, handleMinus, handlePlus } from "../actions/cartActions";

class viewCart extends Component {

    render() {
        const { cartItems, handleMinus, handlePlus } = this.props;
        return (
            <div>
                {/* <!-- START SECTION BREADCRUMB --> */}
                <div class="breadcrumb_section bg_gray page-title-mini">
                    <div class="container">
                        {/* <!-- STRART CONTAINER --> */}
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="page-title">
                                    <h1>View Cart</h1>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <ol class="breadcrumb justify-content-md-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item active">View Cart</li>
                                </ol>
                            </div>
                        </div>
                        {/* </div><!-- END CONTAINER--> */}
                    </div>
                </div>
                {/* <!-- END SECTION BREADCRUMB --> */}

                <div style={{ display: 'flex' }}>
                    <div style={{ margin: '50px', width: "50%" }}>
                        {cartItems.map((cart) =>

                            <div class="view-cart-item" key={cart.id}>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-2">
                                        <img class="image" src="assets/images/ghajini .jpg" alt="el_img2" height="100px" width="150px" />
                                    </div>
                                    <div class="col-xs-8 col-sm-10" style={{ paddingTop: '30px' }}>
                                        <h4>{cart.name}</h4>
                                        <h6 style={{ opacity: '0.5' }}>{cart.detail}</h6>
                                    </div>
                                </div>
                                <div style={{ marginTop: '20px' }}>

                                    <div class="row">
                                        <div class="col-xs-4 col-sm-3"><h5>Per piece: Rs {cart.price}</h5>Remove</div>
                                        <div class="col-xs-8 col-sm-9" >
                                            <h5>Total Price: Rs {cart.price*cart.count}</h5>
                                            <div style={{ display: 'flex' }} >

                                                <div onClick={() => handleMinus(cart)} style={{ cursor: 'pointer' }}> <img src="assets/images/minus-cart.png" alt="" height="32px" width="32px" /></div>
                                                <div style={{ margin: '0 20px 0 20px', fontSize: '20px' }}>{cart.count}</div>
                                                <div onClick={() => handlePlus(cart)} style={{ cursor: 'pointer' }}> <img src="assets/images/plus-cart.png" alt="" height="32px" width="32px" /></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}



                    </div>

                    <div style={{ margin: '50px', width: "50%" }}>
                        <h1>Total: Rs. {cartItems.reduce((a, c) => a + c.price * c.count, 0)}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems
    }),
    { removeFromCart, handleMinus, handlePlus, }
)(viewCart);