import { CLEAR_CART, GET_TOTALS, REMOVE, UPDATE_ITEM } from './constants';

export const updateCartItemAction = (id, amount, value) => {
  return { type: UPDATE_ITEM, payload: { id, amount, value } };
};

export const clearCartAction = () => {
  return { type: CLEAR_CART };
};

export const removeCartItemAction = (id) => {
  return { type: REMOVE, payload: id };
};

export const getTotalCartAction = (total, amount) => {
  return { type: GET_TOTALS, payload: { total, amount } };
};
