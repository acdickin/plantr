import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
  View,
  Text,
  TouchableHighlight,
} =ReactNative

class AppContainer extends Component{
  constructor(props){
    super(props);
    this.state ={
      plantNum:0
    }
  }
  incrementPlantCount(){
    this.setState({  plantNum:this.state.plantNum+1})
  }
  render(){
    return(
      <View>
        <Text style={{marginTop:20}}>Title</Text>
        <TouchableHighlight onPress={()=>{this.incrementPlantCount() }} >
          <Text> Add Plant</Text>
        </TouchableHighlight>
        <Text> Plant Count {this.state.plantNum}</Text>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch);
}

export default connect (()=>{return {}},mapDispatchToProps)(AppContainer)
