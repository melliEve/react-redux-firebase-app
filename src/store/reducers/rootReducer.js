import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firebaseReducer, firestoreReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,   // <- needed if using firestore
});

export default rootReducer;