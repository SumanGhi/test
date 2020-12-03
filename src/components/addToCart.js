import React, { Component } from "react";
import formatCurrency from "../util";
import { connect } from "react-redux";
import Modal from "react-modal";
import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class addToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;
        return (
            <div>
                <li class="dropdown cart_dropdown"><a class="nav-link cart_trigger" href="#" data-toggle="dropdown"><i class="linearicons-cart"></i><span class="cart_count">{cartItems.length} </span></a>
                                        <div class="cart_box dropdown-menu dropdown-menu-right">
                                            <ul class="cart_list">
                                                {cartItems.map((product)=>(
                                                   <li key={product.id}>
                                                    <a class="item_remove" onClick={() => this.props.removeFromCart(product)}><i class="ion-close"></i></a>
                                                    <a href="#"><img src="assets/images/cart_thamb1.jpg"  alt="cart_thumb1" />{product.name}</a>
                                                    <span class="cart_quantity"> {product.count} x <span class="cart_amount"> <span class="price_symbole">Rs.</span></span>{product.price}</span>
                                                </li> 
                                                ))}
                                                
                                            </ul>
                                            <div class="cart_footer">
                                                <p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price"> <span class="price_symbole">Rs.</span></span>{cartItems.reduce((a, c) => a + c.price * c.count, 0)}</p>
                                                <p class="cart_buttons"><a href="viewCart" class="btn btn-fill-line view-cart">View Cart</a><a href="checkout" class="btn btn-fill-out checkout">Checkout</a></p>
                                            </div>
                                        </div>
                                    </li>
            </div>
        );
    }
}

export default connect(
    (state) => ({
      order: state.order.order,
      cartItems: state.cart.cartItems,
    }),
    { removeFromCart, createOrder, clearOrder }
  )(addToCart);