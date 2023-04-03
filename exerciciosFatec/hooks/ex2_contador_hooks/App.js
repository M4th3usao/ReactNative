import React, { Component, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [contador, setContador] = useState(0);

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ textAlign: 'center', marginBottom: 20, fontSize: 18 }}>
            Contador de Pessoas
          </Text>

          <Text style={styles.texto}>{contador} </Text>

          <View style={styles.button}>
            <Button title="+" onPress={() => setContador(contador + 1)} />
          </View>

          <View style={styles.button}>
            <Button title="-" onPress={() => {
                              if(contador > 0)
                              setContador(contador - 1)}} />
          </View>
        </View>
      </View>
    );
}
