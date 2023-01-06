/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import creatSagaMiddleware from 'redux-saga';
import DemoNavigation from './navigations';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import reducers from './redux/reducers';
import sagas from './redux/sagas';

const sagaMiddleware = creatSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <DemoNavigation />
    </Provider>
  );
};
export default App;
