import { createContext } from 'react';
import firebase from 'firebase';

type FirebaseContextType = {
  firebase: firebase.app.App;
};

export const FirebaseContext = createContext<FirebaseContextType | null>(null);
