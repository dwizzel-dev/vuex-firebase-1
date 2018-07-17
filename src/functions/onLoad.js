/**
 * when we need thing loaded on top of the apps
 */

import firebaseSettings from '@/settings/firebase';
import consolas from '@/functions/consolas';
import firebase from 'firebase';

const firebaseInit = () => {
  if (typeof firebaseSettings === 'object') {
    firebase.initializeApp(firebaseSettings);
    consolas.log('firebase: initialized');
  } else {
    consolas.error('firebase: bad settings');
  }
};

// first init sequence
firebaseInit();
