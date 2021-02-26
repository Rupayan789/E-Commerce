// import { addItem } from './cart.actions';
import CartActionTypes from './cart.types';
import {addItemToCart, RemoveCartItem} from './cartitem.utils'
const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems:RemoveCartItem(state.cartItems,action.payload)
      }

    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems:[]
      }
    default:
      return state;
  }
};

export default cartReducer;
