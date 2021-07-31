import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  // Have to Fix
  const [user, setUser] = useState<firebase.default.User | null>();

  const firebase = useContext(FirebaseContext)?.firebase;

  useEffect(() => {
    if (firebase) {
      const listener = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          setUser(authUser);
        } else {
          localStorage.removeItem('authUser');
          setUser(null);
        }
      });

      return () => listener();
    }
  }, [firebase]);

  return { user };
}
