import { ReactComponent as ShoppingIcon } from '../../assets/18764800-shopping-bag.svg';
import './Cart-icon.scss';
import { connect } from 'react-redux';
import { ToggleCartHidden } from '../../redux/cart-reducer/Cart-actions';
import { itemCount } from '../../redux/cart-reducer/Cart-selectors';

const CartIcon = ({ ToggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={ToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});
const mapStateToProps = state => ({
  itemCount: itemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
