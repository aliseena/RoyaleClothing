import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './user-reducer/User-reducer';
import CartReducer from './cart-reducer/Cart-reducer';
import DirectoryReducer from './directory/Directory-reducer';
import shopReducer from './shop/Shop-reducer';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['cart'], // array of the reducers from combineReducers
};
const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
