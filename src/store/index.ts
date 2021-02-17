import {
  createStore, applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from './middlewares';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['signin'],
};

export default function configureStore(preloadedState?: {} | undefined) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const persistedReducer = persistReducer(authPersistConfig, rootReducers);

  const storePersisted: any = createStore(persistedReducer, preloadedState);
  const store: any = createStore(rootReducers, preloadedState, composedEnhancers);
  const persistor = persistStore(storePersisted);

  return { store, persistor };
}
