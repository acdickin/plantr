import React, { Component } from 'react';
import ReactNative from 'react-native';
import { ActionCreators } '../actions'

const {
  View,
  Text,
} =ReactNative

class AppContainer extends Component{
  render(){
    return(
      <View>
        <Text style={{marginTop:20}}>
        <Image source ={require(".../img/menu_button.png")} /> Title
        </Text>
      </View>
    )
  }
}
//to have to images depending on active state
//var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png');
//<Image source={icon} />

//passes actions down to lower components
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(()=>{return{}}, mapDispatchToProps)(AppContainer)
