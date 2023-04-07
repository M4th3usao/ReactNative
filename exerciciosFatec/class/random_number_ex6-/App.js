import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';

import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: 0,
    };
  }

  descobrir = () => {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    this.setState({ resultado: randomNumber });
  };

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.content}>
      
        <Text style={{ fontSize: 22, textAlign: 'center' }}>
          Jogo do Número Aleatório
        </Text>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            source={{
              uri: 'https://observatoriodosfamosos.uol.com.br/portal/wp-content/uploads/2023/03/Screenshot-2023-03-10-at-15.20.06.jpg',
            }}
            style={{ width: 200, height: 150, marginTop: 10, marginBottom: 50 }}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'red',
            marginBottom: 25,
          }}>
          Pense em um número de 0 a 10:
        </Text>

        <Text style={{ fontSize: 28, color: 'red', textAlign: 'center' }}>
          {this.state.resultado}
        </Text>

        <Button title="Descobrir" onPress={this.descobrir} />
      </View>
    </View>
    );
  }
}

export default App;
