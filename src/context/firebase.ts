import { createContext } from 'react';
import firebase from 'firebase';

type FirebaseContextPropsType = {
  firebase: firebase.app.App;
};

export const FirebaseContext =
  createContext<FirebaseContextPropsType | null>(null);
