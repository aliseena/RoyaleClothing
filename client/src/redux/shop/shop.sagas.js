import { takeEvery, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop-types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop-actions';
import { onSnapshot, collection } from 'firebase/firestore';
import {
  db,
  convertCollectionsSnapShotToMap,
} from '../../firebase/Firebase-utilities';

export function* fetchCollectionsStartAsync() {
  try {
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  const collectionRef = collection(db, 'collections');
  const snapShot = yield collectionRef.get();
  const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapShot);
  yield fetchCollectionsSuccess(collectionsMap);
  // onSnapshot(collectionRef, async snapShot => {
  //   // succesful fetch call
  //   dispatch(fetchCollectionsSuccess(collectionsMap));
  //   // failed fetch call
  // });
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}
