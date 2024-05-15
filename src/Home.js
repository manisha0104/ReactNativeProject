import { View, Text, TouchableOpacity, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function Home() {
  const navigation = useNavigation();

 const [enterGoals, setenterGoals]=useState('');
 const [courseGoals, setcourseGoals] =useState([]);


  const addgoalHandeler=(goalTitle)=>{
    setcourseGoals(currentGoals => [
      ...courseGoals, 
      {id:Math.random().toString(),value:goalTitle}]);
  }
  const removeGoalHandeler=(goalId)=>{
    setcourseGoals(currentGoals =>{
      return(
        courseGoals.filter((goal)=> goal.id !== goalId)
      )
    })
  }
  return (
    <View>
      
     <GoalInput onAddGoal={addgoalHandeler}/>
    
        <FlatList
        keyExtractor={(item,index)=> item.id}
        data={courseGoals}
     
        renderItem={itemData=><GoalItem 
          id={itemData.item.id}
          onDelete={removeGoalHandeler}
          title={itemData.item.value}/>
        
        }
        />
         
        

    </View>
  )
}