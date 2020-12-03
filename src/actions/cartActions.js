import { ADD_TO_CART, REMOVE_FROM_CART, HANDLE_PLUS, HANDLE_MINUS } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== product.id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const handlePlus = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
    cartItems.forEach((x) => {
      
      if (x.id === product.id) {
        x.count++;
      }
    });
    dispatch({
      type: HANDLE_PLUS,
      payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const handleMinus = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
    cartItems.forEach((x) => {
      if (x.id === product.id) {
        if(x.count>1){
          x.count--;
        }
      }
    });
    dispatch({
      type: HANDLE_MINUS,
      payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}