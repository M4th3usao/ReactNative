import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles } from './styles';


export default function App(){
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0); 
  const [resultado, setResultado] = useState(0);


    function Calcular(){
      res = numero1 * numero2 
      setResultado(res);
    }
  
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Multiplicador de Números</Text>

          <TextInput
          style={styles.input}
          placeholder="Digite o primeiro numero?"
          onChangeText={ (numero1) => setNumero1(numero1) }
          />

          <TextInput
          style={styles.input}
          placeholder="Digite o segundo numero?"
          onChangeText={ (numero2) => setNumero2(numero2)}
          />

          <View style={styles.button}>
            <Button  title="Calcular" onPress={Calcular} />
          </View>

          <View style={styles.textoBox} >
            <Text> {resultado} </Text>
          </View>
        </View>

      </View>
    );
}

