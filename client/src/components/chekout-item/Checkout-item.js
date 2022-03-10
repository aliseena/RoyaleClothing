import './Checkout-item.scss';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart-reducer/Cart-actions';
import { removeItem } from '../../redux/cart-reducer/Cart-actions';
import { AddItem } from '../../redux/cart-reducer/Cart-actions';
const CheckoutItem = ({ cartItem, clearItem, remove, add }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={
            cartItem.quantity > 1
              ? () => remove(cartItem)
              : () => clearItem(cartItem)
          }
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => add(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span onClick={() => clearItem(cartItem)} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  add: item => dispatch(AddItem(item)),
  remove: item => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
