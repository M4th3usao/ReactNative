import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import { styles } from './styles';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class Pessoa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      exibirNome: '',
      idade: '',
      exibirIdade: '',
      sexo: '',
      exibirSexo: '',
      escolaridade: '',
      exibirEsco: '',
      
      limite: 0,
      exibirLimite: '',
      status: false,
      exbirStatus: false
    };

   this. confirmar = this.confirmar.bind(this)
  }

  confirmar() {
    this.setState({ exibirNome: this.state.nome });
    this.setState({ exibirIdade: this.state.idade });
    this.setState({ exibirSexo: this.state.sexo });
    this.setState({ exibirEsco: this.state.escolaridade });
    this.setState({ exbiriLimite: this.state.limite.toFixed(0) });
    this.setState({ exibirStatus: this.state.status  ? 'Sim' : 'Não'});
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoInputs}>
          
            <TextInput placeholder='Nome: ' style={styles.input} onChangeText={(texto) => this.setState({nome: texto})} />
          
            <TextInput style={styles.input} placeholder='Idade: ' onChangeText={(texto) => this.setState({idade: texto})} />

          <View style={styles.pickerStyle}>
            <Picker
              style={styles.opcoes}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sexo: itemValue })
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
              selectedValue={this.state.escolaridade}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ escolaridade: itemValue })
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
                this.setState({ limite: valorSelecionado })
              }
              value={this.state.limite}
            />
          </View>

          <View style={styles.switchBR}>
            <Text style={styles.campos}>Brasileiro:</Text>
            <Switch
              style={{ marginLeft: 15 }}
              value={this.state.status}
              onValueChange={(valorSwitch) =>
                this.setState({ status: valorSwitch })
              }
            />
          </View>

          <View style={styles.btnRetorno}>
            <Button title="Confirmar" onPress={this.confirmar} />
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
              <Text> {this.state.exibirNome} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Idade:</Text>
              <Text> {this.state.exibirIdade} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Sexo:</Text>
              <Text> {this.state.exibirSexo} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Escolaridade:</Text>
              <Text> {this.state.exibirEsco} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Limite:</Text>
              <Text> {this.state.exbiriLimite} </Text>
            </View>

            <View
              style={styles.textRetorno}>
              <Text>Brasileiro:</Text>
              <Text> {this.state.exibirStatus} </Text>
            </View>
          </View>

        </View>
      </View>
    </View>
    );
  }
}

export default Pessoa;
