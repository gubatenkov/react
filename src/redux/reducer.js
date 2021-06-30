import { CLEAR_CART, GET_TOTALS, REMOVE, UPDATE_ITEM } from './constants';
import cartItems from '../cart-items';

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const reducer = (state = initialStore, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    const newCart = state.cart.filter((cartItem) => {
      if (cartItem.id !== action.payload) {
        return cartItem;
      }
      return;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === UPDATE_ITEM) {
    if (action.payload.value === 'incr') {
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: newCart };
    }
    if (action.payload.value === 'decr') {
      let newCart = [];
      if (action.payload.amount <= 1) {
        newCart = state.cart.filter((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return;
        });
      } else {
        newCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }
      return { ...state, cart: newCart };
    }
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.total += price * amount;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    return { ...state, total: total.toFixed(2), amount };
  }
  return state;
};
