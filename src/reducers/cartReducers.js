import { ADD_TO_CART, REMOVE_FROM_CART, HANDLE_PLUS, HANDLE_MINUS  } from "../types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case HANDLE_PLUS:
      return{cartItems:action.payload.cartItems}
    case HANDLE_MINUS:
      return{cartItems:action.payload.cartItems}
    default:
      return state;
  }
};
