import './Collection-page.scss';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/Shop-selectors';

const CollectionPage = ({ collection, UrlParam }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title"> {title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.UrlParam.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
