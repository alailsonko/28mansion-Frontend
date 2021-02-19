import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import configureStore from './store';

const { store, persistor }: any = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
}

export default App;
