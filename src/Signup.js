import { View, Text, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    getdatabase();
  }, []);
  const getdatabase = async () => {
    try {
      const data = await firestore().collection('user_master').doc('signup').get();
      console.log('data', data)
    } catch (error) {
      console.log(error)
    }
  }
  const handelSignup = () => {
    navigation.navigate('Home')
  }
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30, color: 'black' }}>Signup</Text>
      {/* email */}
      <View style={{
        width: 350,
        marginTop: 50,
        height: 80,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignSelf: 'center',
      }}>
        <View style={{ marginLeft: 2, }}>
          <Text style={{
            color: 'black',
            fontSize: 20,
          }}>email
          </Text>
        </View>
        <TextInput style={{
          width: 350,
          fontSize: 20,
          color: 'black'
        }}
          placeholderTextColor={'black'}
          placeholder={'Enter Email'}
          keyboardType='email-address'
          returnKeyLabel='done'
          returnKeyType='done'
          onSubmitEditing={() => { Keyboard.dismiss() }}
          onChangeText={(txt) => { setEmail(email) }}
          //value={email}
          maxLength={100}
        />
      </View>
      {/* password */}
      <View style={{
        width: 350,
        marginTop: 50,
        height: 80,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignSelf: 'center',
      }}>
        <View style={{ marginLeft: 2, }}>
          <Text style={{
            color: 'black',
            fontSize: 20,
          }}>password
          </Text>
        </View>
        <TextInput style={{
          width: 350,
          fontSize: 20,
          color: 'black'
        }}
          placeholderTextColor={'black'}
          placeholder={'Enter password'}
          keyboardType='number-pad'
          returnKeyLabel='done'
          returnKeyType='done'
          onSubmitEditing={() => { Keyboard.dismiss() }}
          onChangeText={(txt) => { setPassword(password) }}
          secureTextEntry={true}
          //value={email}
          maxLength={100}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7}
        onPress={handelSignup}
        style={{
          height: 50, width: 300,
          backgroundColor: 'blue',
          alignSelf: 'center',
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5
        }}>
        <Text style={{
          color: 'white',
          fontSize: 20,
        }}>Signup
        </Text>
      </TouchableOpacity>
    </View>
  )
}