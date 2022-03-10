import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from './Root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import { fetchCollectionsStart } from './shop/shop.sagas';
import createSagaMiddleware from 'redux-saga';
// const sageMiddleware = createSagaMiddleware();

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
// export default { store, persistor };
