import React, {useState}from "react";
import { View,TextInput,Button } from "react-native";
const GoalInput =props =>{
    const [enterGoals,setenterGoals] =useState('');
    const getInputhandeler=(enteredtxt)=>{
        setenterGoals(enteredtxt)
      }
    return(
<View style={{ padding: 20, 
                    flexDirection: 'row', 
                    width: '90%', 
                    justifyContent: 'space-between',
                    alignItems:'center'
                    }}>
        <TextInput
          placeholder='Enter Goals'
          placeholderTextColor={'black'}
          style={{ borderColor: 'black', borderWidth: 1 , width: '80%', }}
          onChangeText={getInputhandeler}
          value={enterGoals}
        />
        <Button title='ADD' onPress={props.onAddGoal.bind(this,enterGoals)}
        />

      </View>
    );
};
export default GoalInput;