import firebase from 'firebase/compat/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAanfd3jsKW6-9gjCa0JXw0mGbYMvKqjxc',
  authDomain: 'royale-db.firebaseapp.com',
  projectId: 'royale-db',
  storageBucket: 'royale-db.appspot.com',
  messagingSenderId: '53307212262',
  appId: '1:53307212262:web:44e49dbad012905daf1627',
  measurementId: 'G-0XKRN5S1ZJ',
};

firebase.initializeApp(config);
export const db = getFirestore();
export const auth = getAuth();
// create a user in db with sign in button
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // if user is passed form App.js
  try {
    const userRef = doc(db, 'users', `${userAuth.uid}`);
    // send request and get a snapshot
    const userSnap = await getDoc(userRef);
    // create user in db
    if (!userSnap.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    }
    return userRef;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// add collection and documents to firestore
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach(obj => {
    // generate an id
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

// convert collections snapshot to map
export const convertCollectionsSnapShotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accu, collection) => {
    accu[collection.title.toLowerCase()] = collection;
    return accu;
  }, {});
};
// sign up popup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
