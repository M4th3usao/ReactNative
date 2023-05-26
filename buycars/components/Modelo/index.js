import React, {Component, useState} from 'react';
import {View, Text} from 'react-native'

import {styles} from './styles'

export default function Modelo(){
    return(
        <View> 
            <Text>{this.props.data.nome}</Text>
        </View>

    );
}