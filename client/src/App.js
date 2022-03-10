import { GlobalStyle } from './GlobleStyles';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/Checkout/Checkout';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/sing-in-and-sign-up/Sign-in-and-sign-up';
import { Fragment } from 'react/cjs/react.production.min';
import withSpinner from './components/with-spinner/with-spinner';
import CollectionUrl from './pages/shop/Collection-url';
// redux
import { setCurrentUser } from './redux/user-reducer/User-actions';
import { selectCurrentUser } from './redux/user-reducer/User-selectors';
import { fetchCollectionsStartAsync } from './redux/shop/shop-actions';
import {
  selectIsCollectionsFetching,
  selectIsCollectionLoaded,
} from './redux/shop/Shop-selectors';
// firebase
import { createUserProfileDocument, auth } from './firebase/Firebase-utilities';
import { onSnapshot } from 'firebase/firestore';
// router
import { Routes, Route, Navigate } from 'react-router-dom';

// HOC Spinner components
const ShopPageWithSpinner = withSpinner(ShopPage);
const CollectionsUrlWithSpinner = withSpinner(CollectionUrl);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isFetching = useSelector(selectIsCollectionsFetching);
  const isCollectionLoaded = useSelector(selectIsCollectionLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    let unSubscribeFromAuth;
    unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // checking for the user in firebase
      if (user) {
        const userRef = await createUserProfileDocument(user);
        // set the currect user of app
        onSnapshot(userRef, snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(user));
      }
    });
    dispatch(fetchCollectionsStartAsync());
    // cleanup function = componetWillUnmount
    return () => {
      unSubscribeFromAuth = null;
    };
  }, [dispatch]);

  return (
    <Fragment className="container">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop/*"
          element={<ShopPageWithSpinner isLoading={isFetching} />}
        />
        <Route
          path="/shop/:collectionId"
          element={
            <CollectionsUrlWithSpinner isLoading={!isCollectionLoaded} />
          }
        />
        <Route path="checkout" element={<CheckoutPage />} />
        {currentUser ? (
          <Route path="signIn" element={<Navigate to="/home" />} />
        ) : (
          <Route path="signIn" element={<SignInAndSignUp />} />
        )}
      </Routes>
    </Fragment>
  );
};

export default App;
