import DevStore from './configureStore.dev';
import ProdStore from './configureStore.prod';

let store;
if (process.env.NODE_ENV === 'production') {
  store = ProdStore;
} else {
  store = DevStore;
}

module.exports = store;
