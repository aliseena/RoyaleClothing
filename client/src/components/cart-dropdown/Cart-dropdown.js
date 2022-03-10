import './Cart-dropdown.scss';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cartItem/Cart-item';
import { connect } from 'react-redux';
import { cartItems } from '../../redux/cart-reducer/Cart-selectors';
import { useNavigate } from 'react-router-dom';
import { ToggleCartHidden } from '../../redux/cart-reducer/Cart-actions';

const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-cart">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          dispatch(ToggleCartHidden());
        }}
        signInAndSignUp
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = state => ({
  cartItems: cartItems(state),
});
export default connect(mapStateToProps)(CartDropDown);
