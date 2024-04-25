import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

export const useFireBase = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const signOut = auth()
    .signOut()
    .then(() => console.log('User signed out!'));

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const createUserWithEmailAndPassword = (email, password) => {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (initializing) return null;

  return {createUserWithEmailAndPassword};
};
