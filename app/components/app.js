import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from 'app/containers/AppContainer';
import{ AppRegistry } from 'react-native';

//logger middleware. only runs in dev mode
const loggerMiddleware =createLogger({predicate:(getState,action)=>__DEV__})
//store
function configureStore(initalState){
  //runs all middleware during each state
  const enhancer =compose(
    applyMiddleware(
      thunkMiddleWare,
      loggerMiddleware
    ),
  );
  return createStore(reducer,initalState,enhancer);
}
const store =configureStore({});

class App =()=>{
  <Provider store={store}>
    <AppContainer/>
  </Provider>
}
AppRegistry.registerComponent('App', () => App);
