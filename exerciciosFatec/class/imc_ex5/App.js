import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      retorno: '',
      peso: 0,
      altura: 0,
    };

    this.verificar = this.verificar.bind(this);
  }

  verificar() {
    if (this.state.peso === 0 || this.state.altura === 0) {
      alert('Digite um valor:');
      return;
    }
    res = this.state.peso / this.state.altura ** 2;
    this.setState({ resultado: 'Resultado: ' + res });

    if (res < 18.5) {
      this.setState({ retorno: 'Abaixo do Peso' });
    } else if (res >= 18.6 && res <= 24.9) {
      this.setState({ retorno: 'Peso Normal' });
    } else if (res >= 25 && res <= 29.9) {
      this.setState({ retorno: 'Acima do peso' });
    } else if (res >= 30 && res <= 40) {
      this.setState({ retorno: 'Obesidade de grau II' });
    } else if (res >= 40) {
      this.setState({ retorno: 'Obesidade de grau III (Morbida)' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Indice de Massa Corporal</Text>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Image
              source={{
                uri: 'https://www.saudebemestar.pt/media/89347/obesidade.jpg',
              }}
              style={{ width: 200, height: 150, marginTop: 10 }}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Digite o peso "
            onChangeText={(valor) => this.setState({ peso: valor })}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite o preço da altura"
            onChangeText={(valor) => this.setState({ altura: valor })}
          />

          <Button title="Verificar" onPress={this.verificar} />

          <Text style={styles.texto}> {this.state.resultado} </Text>
          <Text style={styles.texto}> {this.state.retorno} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 450,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    margin: 10,
    fontSize: 16,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
  titulo: {
    fontSize: 18,
  },
});

export default App;
