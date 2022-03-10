import { createSelector } from 'reselect';

const selectCart = state => state.cart;
// hidden drop down
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
// cartItems array
export const cartItems = createSelector([selectCart], cart => cart.cartItems);
// total items
export const itemCount = createSelector([cartItems], cartItems => {
  return cartItems.reduce((accu, cartItem) => accu + cartItem.quantity, 0);
});
// total cost
export const cartTotal = createSelector([cartItems], cartItems =>
  cartItems.reduce(
    (accu, cartItem) => accu + cartItem.quantity * cartItem.price,
    0
  )
);
