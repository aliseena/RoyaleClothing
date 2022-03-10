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
      <div>
        <p>Test credit cards: 4242 4242 4242 4242</p>
        <p>This could be any month & year but the future : 4/22</p>
        <p>CVC : any 3 degit number : 123</p>
      </div>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: cartItems,
  total: cartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
