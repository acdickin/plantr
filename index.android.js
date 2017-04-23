import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import app from './app/components/app'
export default class plantr extends Component{
  render(){
    return(
      <View>
        <App/>
      </View>
    );
  };
}

AppRegistry.registerComponent('plantr', () => plantr);
