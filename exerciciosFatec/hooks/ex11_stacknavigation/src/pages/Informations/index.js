import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';


import { styles } from './styles';

export default function Informations({route}) {
 const navigation = useNavigation();

 return (
        <View style={{ alignSelf: 'center' }}>
          <View style={styles.dadosRetorno}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                marginTop: 5,
                marginBottom: 10,
              }}>
              {' '}
              Dados Informados:{' '}
            </Text>

            <View
              style={styles.textRetorno}>
              <Text>Nome:</Text>
              <Text> {route.params?.nome} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Idade:</Text>
              <Text> {route.params?.idade} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Sexo:</Text>
              <Text> {route.params?.sexo} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Escolaridade:</Text>
              <Text> {route.params?.esco} </Text>
            </View>

            <View
              style={styles.retorno}>
              <Text>Limite:</Text>
              <Text> {route.params?.limite.toFixed(2)} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Brasileiro:</Text>
              <Text> {route.params?.status} </Text>
            </View>
          </View>

           <Button
           style={styles.btn}
           title='Voltar para tela Home'
           onPress={ () => navigation.goBack() }
          />
          
        </View>
    );
}
   