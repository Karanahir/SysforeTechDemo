import {createStore, combineReducers} from 'redux';
import {Reducer} from './Reducer';

const rootReducer = combineReducers({
  theme: Reducer,
});

// Create a store with the reducer.
const configureStore = () => {
  return createStore(rootReducer);
};

// Export the configured store
export default configureStore;
