import CartActionTypes from './Cart-action-types';

export const ToggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
export const AddItem = item => ({
  type: CartActionTypes.ADD_To_CART,
  payload: item,
});
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
