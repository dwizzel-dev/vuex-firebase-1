/**
 * firestore actions
 */

import firebase from 'firebase';
import { firebaseAction } from 'vuexfire';

// firestore db instance
const db = firebase.firestore();

// some db settings
db.settings({ timestampsInSnapshots: true });

export default {
  setRef: firebaseAction(({ bindFirebaseRef }, { name, ref }) => {
    bindFirebaseRef(name, ref);
  }),
  setRefByName: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef(ref.name, db.collection(ref.name))
      .then(() => {
        // we use storeRef because te function loose trace of the this.$store
        ref.storeRef.commit('setLoaded', { name: ref.name, status: true });
      });
  }),
  initAllRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('messages', db.collection('messages'));
    bindFirebaseRef('todos', db.collection('todos'));
  }),
};
