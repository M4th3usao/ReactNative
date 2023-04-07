import React, { Component, useState } from 'react';
import { View, Text,  FlatList, Linking } from 'react-native';

import {vagasStyle} from './vagasStyle'

const Vagas = () => {
       const feed = [
          {key: "1", titulo: 'Dev. Front End Sênior', contrato: 'PJ', salario: 'R$ 22.000,00', local: 'Remoto',},
          {key: "2", titulo: 'Dev. Back End Sênior', contrato: 'CLT', salario: 'R$ 15.000,00', local: 'Remoto'},
          {key: "3", titulo: 'Dev. Front End Jr', contrato: 'CLT ou PJ', salario: 'R$ 5.000,00', local: 'Remoto'},
          {key: "4", titulo: 'Dev Ops', contrato: 'PJ', salario: 'R$ 8.000,00', local: 'Remoto'},
          {key: "5", titulo: 'Dev. Back End', contrato: 'CLT ou PJ', salario: 'R$ 15.000,00', local: 'Hibrido'},
          {key: "6", titulo: 'Dev. Front End', contrato: 'PJ', salario: 'R$ 5.000,00', local: 'Remoto'},
          {key: "7", titulo: 'Dev. Full Stack', contrato: 'CLT', salario: 'R$ 8.000,00', local: 'Hibrido'},
          {key: "8", titulo: 'Dev. Full Stack', contrato: 'CLT', salario: 'R$ 11.000,00', local: 'Remoto'},
          {key: "9", titulo: 'Dev. Front End', contrato: 'PJ', salario: 'R$ 4.500,00', local: 'Hibrido'},
        ];

     return(
        <View>
          <FlatList 
            data={feed}
            renderItem={({item, index}) => {
            return(
              <View style={vagasStyle.card}>
                <Text> Vaga: {item.titulo} </Text>
                <Text> Tipo de Contrato: {item.contrato} </Text>
                <Text> Salario: {item.salario} </Text>
                <Text> Local: {item.local} </Text>
                <Text 
                  style={vagasStyle.hyperlinkStyle} 
                  onPress={() => { 
                  Linking.openURL('https://reactnative.dev');
                }}>
                Veja mais detalhes sobre a Vaga!
                </Text> 
              </View>
            )
          }}
          keyExtractor={(elemento) => String(elemento.key)}
          />
        </View>
    )
}

export default Vagas;

