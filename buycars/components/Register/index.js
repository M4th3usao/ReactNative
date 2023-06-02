import React, {useState, useEffect} from 'react';
import {View, Text, Button,TextInput, Keyboard, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Register({route}){
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  
  const [input, setInput] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputMobileNumber, setInputMobileNumber] = useState();

  useEffect(() => {
    const recoverData = async () => {
      const nameUser = await AsyncStorage.getItem('name')
      const emailUser = await AsyncStorage.getItem('email')
      const numberUser = await AsyncStorage.getItem('mobileNumber')
      setName(nameUser)
      setEmail(emailUser)
      setMobileNumber(numberUser)
    };

    recoverData();
  }, []);

  const recordData = async () => {
    setName(input)
    setEmail(inputEmail)
    setMobileNumber(inputMobileNumber)
    await AsyncStorage.setItem('name', input);
    await AsyncStorage.setItem('email', inputEmail);
    await AsyncStorage.setItem('mobileNumber', inputMobileNumber);
    Keyboard.dismiss();
    alert('Salvo com sucesso!')
  }

  function goProfile(){
    navigation.navigate('Profile', 
    {
      name: name, 
      email: email, 
      mobileNumber: mobileNumber
    });
  }
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          underlineColorAndroid='transparent'
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={inputEmail}
          onChangeText={(text) => setInputEmail(text)}
          underlineColorAndroid='transparent'
        />

        <Text>Celular</Text>
        <TextInput
          style={styles.input}
          value={inputMobileNumber}
          onChangeText={(text) => setInputMobileNumber(text)}
          underlineColorAndroid='transparent'
        />


        <Pressable
         style={styles.pressable}
         onPress={goProfile}
        >
          <Text style={styles.textPressable}>Salvar</Text>
        </Pressable>

        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{mobileNumber}</Text>
      </View>



      <Button
       
        title='Verificar suas informações'
        onPress={ () => navigation.goBack('Profile') }
      />

    </View>
  );
}