import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import { styles } from './styles';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEsco] = useState('');
  const [limite, setLimite] = useState('');
  const [status, setStatus] = useState(false);

  const [resNome, setResNome] = useState('');
  const [resIdade, setResIdade] = useState('');
  const [resSexo, setResSexo] = useState('');
  const [resEsco, setResEsco] = useState('');
  const [resLimite, setResLimite] = useState('');
  const [resStatus, setResStatus] = useState('');

  function Confirmar() {

    exibirNome = nome
    setResNome(exibirNome)

    exibirIdade = idade
    setResIdade(exibirIdade)

    exibirSexo = sexo
    setResSexo(exibirSexo)

    exibirEsco = escolaridade
    setResEsco(exibirEsco)

    exibirLimite = limite
    setResLimite(exibirLimite)

    exibirStatus = status  ? 'Sim' : 'Não'
    setResStatus(exibirStatus)
  }

    return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoInputs}>
          
            <TextInput placeholder='Nome: ' style={styles.input} onChangeText={(nome) => setNome(nome)} />
          
            <TextInput style={styles.input} placeholder='Idade: ' onChangeText={(idade) => setIdade(idade)} />

          <View style={styles.pickerStyle}>
            <Picker
              style={styles.opcoes}
              selectedValue={sexo}
              onValueChange={(itemValue, itemIndex) =>
                setSexo(itemValue)
              }>
              <Picker.Item key={0} value={''} label="----- Sexo -----" />
              <Picker.Item key={1} value={'Masculino'} label="Masculino" />
              <Picker.Item key={2} value={'Feminino'} label="Feminino" />
              <Picker.Item key={3} value={'Outros'} label="Outros" />
            </Picker>
          </View>

          <View style={styles.pickerStyle}>
            <Picker
              style={styles.opcoes}
              selectedValue={escolaridade}
              onValueChange={(itemValue, itemIndex) =>
                setEsco(itemValue)
              }>
              <Picker.Item
                key={0}
                value={'Escolaridade'}
                label="--- Escolaridade ---"
              />
              <Picker.Item
                key={1}
                value={'Ensino Fundamental'}
                label="Ensino Fundamental"
              />
              <Picker.Item
                key={2}
                value={'Ensino Médio'}
                label="Ensino Médio"
              />
              <Picker.Item
                key={3}
                value={'Ensino Superior'}
                label="Ensino Superior"
              />
            </Picker>
          </View>

          <View style={styles.limite}>
            <Text style={styles.campos}>Limite:</Text>
            <Slider
              minimumValue={0}
              maximumValue={1000}
              onValueChange={(valorSelecionado) =>
                setLimite(valorSelecionado)
              }
              value={limite}
            />
          </View>

          <View style={styles.switchBR}>
            <Text style={styles.campos}>Brasileiro:</Text>
            <Switch
              style={{ marginLeft: 15 }}
              value={status}
              onValueChange={(valorSwitch) =>
                setStatus(valorSwitch)
              }
            />
          </View>

          <View style={styles.btnRetorno}>
            <Button title="Confirmar" onPress={Confirmar} />
          </View>
    
        </View>

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
              <Text> {resNome} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Idade:</Text>
              <Text> {resIdade} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Sexo:</Text>
              <Text> {resSexo} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Escolaridade:</Text>
              <Text> {resEsco} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Limite:</Text>
              <Text> {resLimite} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Brasileiro:</Text>
              <Text> {resStatus} </Text>
            </View>
          </View>

        </View>
      </View>
    </View>
    );
}




