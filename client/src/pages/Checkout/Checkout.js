import './Checkout.scss';
import { connect } from 'react-redux';
import { cartItems } from '../../redux/cart-reducer/Cart-selectors';
import { createStructuredSelector } from 'reselect';
import { cartTotal } from '../../redux/cart-reducer/Cart-selectors';
import CheckoutItem from '../../components/chekout-item/Checkout-item';
import StripeCheckOutButton from '../../components/stripe-button/Stripe-checkout-button';
const CheckoutPage = ({ cartItems, total }) => (
  <div>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total:${total}</span>
        <StripeCheckOutButton price={total} />
      </div>
      <div className="credit-card">
        <p>
          Test credit card: <span>4242 4242 4242 4242</span>
        </p>
        <p>
          Any month & year but in the future : <span> 4/22</span>
        </p>
        <p>
          Any 3 degit number : <span>123</span>
        </p>
      </div>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: cartItems,
  total: cartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
