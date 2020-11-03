import {
  createStore, applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './middlewares';

export default function configureStore(preloadedState?: {} | undefined) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducers, preloadedState, composedEnhancers);

  return store;
}
