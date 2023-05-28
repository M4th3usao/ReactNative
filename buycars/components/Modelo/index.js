import React, {Component, useState} from 'react';
import {View, Text} from 'react-native'

import {styles} from './styles'

export default function Modelo(props){
    return(
        <View> 
            <Text>{props.data.codigo} - {props.data.nome}</Text>
        </View>

    );
}