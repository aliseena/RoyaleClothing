import './CollectionItem.scss';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart-reducer/Cart-actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted="true">
        Add To Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(AddItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
