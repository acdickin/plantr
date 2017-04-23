import React, { Component } from 'react';
import ReactNative from 'react-native';


const {
  View,
  Text,

} =ReactNative

class AppContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Text style={{marginTop:20}}>Title</Text>
      </View>
    )
  }
}



export default AppContainer
