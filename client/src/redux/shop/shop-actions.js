import ShopActionTypes from './shop-types';
import {
  db,
  convertCollectionsSnapShotToMap,
} from '../../firebase/Firebase-utilities';
import { onSnapshot, collection } from 'firebase/firestore';
// start fetching action
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});
// succesful fetch action
export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
// failed fetch action
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
// shop page fetch async function
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = collection(db, 'collections');
    // start fetch call
    dispatch(fetchCollectionsStart());

    onSnapshot(collectionRef, async snapShot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
      // succesful fetch call
      dispatch(fetchCollectionsSuccess(collectionsMap));
      // failed fetch call
    });
    //.catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
