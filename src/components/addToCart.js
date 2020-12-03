import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

class addToCart extends Component {
  
  render() {
    const { cartItems} = this.props;
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
      cartItems: state.cart.cartItems,
    }),
    { removeFromCart}
  )(addToCart);