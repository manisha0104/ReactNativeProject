
import React, { Component } from "react";
import { View,Text, Touchable, TouchableOpacity } from "react-native";
export default class Button2 extends React.PureComponent{
  // constructor(props){
    constructor(props) {
    super(props)
    console.log('constructor')
    this.state={
      value:1
    }
  }
  componentDidMount(){
  
  }
 
render(){
  console.log('render')
  return(
    <TouchableOpacity 
      style={{alignSelf:'center',
              backgroundColor:'pink',
              width:90,
              height:40,
              justifyContent:'center',
              marginTop:20
            }}
      onPress={()=>this.setState({value:this.state.value+1})}>
      <Text style={{color:'black',textAlign:'center'}}>Button1</Text>
    </TouchableOpacity>
  )
}
}
