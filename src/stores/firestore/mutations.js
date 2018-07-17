/**
 * firestore mutations
 */

import { firebaseMutations } from 'vuexfire';

// add custom mutations to know when collection are loaded
firebaseMutations.setLoaded = (state, ref) => {
  if (typeof state.local.loaded[ref.name] !== 'undefined'
      && state.local.loaded[ref.name] !== ref.status) {
    state.local.loaded[ref.name] = ref.status;
  }
};

export default firebaseMutations;
