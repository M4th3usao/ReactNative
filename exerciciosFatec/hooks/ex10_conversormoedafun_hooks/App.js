import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import {styles} from './styles';

import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [valor, setValor] = useState(0)
  const [moedaOrigem, setMoedaOrigem] = useState(1)
  const [moedaDestino, setMoedaDestino] = useState(1)
  const [result, setResult] = useState()

  function Converte(){
    res = (moedaOrigem / moedaDestino) * valor
    setResult(res.toFixed(2))
  }

  return(
    <View style={styles.container}>
       <View style={styles.converte}> 
          <Text style={styles.title}>Conversor de Moedas: Dolar, Real e Euro</Text> 

          <View>
            <TextInput style={styles.textInput} placeholder='Valor' onChangeText={(valor) => setValor(valor)} />
          </View>

          <View style={styles.picker}>
            <Picker
                style={styles.textPicker}
                selectedValue={moedaOrigem}
                onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)
                }>
                <Picker.Item key={1} value={1} label="Real" />
                <Picker.Item key={2} value={5.06} label="Dolar" />
                <Picker.Item key={3} value={5.50} label="Euro" />
              </Picker>
          </View>

          <View  style={styles.picker}>
            <Picker
            style={styles.textPicker}
                selectedValue={moedaDestino}
                onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)
                }>
                <Picker.Item key={1} value={1} label="Real" />
                <Picker.Item key={2} value={5.06} label="Dolar" />
                <Picker.Item key={3} value={5.50} label="Euro" />
              </Picker>
          </View>

           <Button title="Converter" onPress={Converte} />

           <Text style={styles.result}>{result}</Text>
        </View>
    </View>
  )
}