import CollectionPage from '../collection/Collection-page';
import { useParams } from 'react-router-dom';

const CollectionUrl = () => {
  const param = useParams();
  return (
    <div>
      <CollectionPage UrlParam={param} />
    </div>
  );
};
export default CollectionUrl;
