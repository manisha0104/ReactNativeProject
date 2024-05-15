import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}
            style={{width: '90%', 
                    alignSelf: 'center', 
                    backgroundColor: 'lightgray', 
                    padding: 10, 
                    marginVertical: 10 
                    }}>
            <Text style={{ color: 'black', padding: 10 }}>{props.title}</Text>
        </TouchableOpacity>
    );

};

export default GoalItem;