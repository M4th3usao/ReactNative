import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text,} from 'react-native';
import {styles} from './styles'

import Vagas from './components/Vagas/Vagas'

export default function App(){

    return(
      <View style={styles.MainContainer}>
        <View style={styles.TabHeaderView}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20, position: 'absolut' }}>Vagas de Emprego</Text>
         </View>
        <ScrollView vertical={true} showsVerticalScrollIndicator={true} style={styles.ScrollViewStyles}>
          <Vagas/>
        </ScrollView>
      </View>
    )
}
