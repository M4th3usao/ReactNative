import React, {Component, useState} from 'react';
import {View, Text} from 'react-native'

import {styles} from './styles'

export default function Modelo(props){
    return(
        <View style={styles.textContent}> 
            <View style={styles.rowContent}>
                    <Text>{props.data.codigo}</Text>
                    <Text>{props.data.nome}</Text>
            </View>
        </View>

    );
}