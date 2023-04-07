import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, LinKing} from 'react-native';
import {styles} from './styles'

import {Photo} from './components/Photo'
import {Descricao} from './components/Descricao'

export default function App() {

    return (

      <View style={styles.container}>
        <View style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: 25, marginBottom: 25, marginTop: 15 }}>
            Anúncios
          </Text>
        </View>
        <View>
          <Text>Verifique nossos veículos em estoque:</Text>
        </View>
        <View style={{alignSelf:'center', justifyContent: 'center'}}>
          <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={true}>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Descricao />{' '}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }


