import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';

class App extends Component {
  render() {
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
}

class Photo extends Component {
  render() {
    let img =
      'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202301/20230126/MERCEDESBENZ-G-63-AMG-4.0-V8-TURBO-GASOLINA-MAGNO-EDITION-4MATIC-SPEEDSHIFT-wmimagem14413923425.jpg';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{
            width: this.props.largura,
            height: this.props.altura,
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
      </View>
    );
  }
}

class Descricao extends Component {
  render() {
    return (
      <View style={styles.texto}>
        <Text>Mercedes G63 AMG</Text>
        <Text>4.0 V8 TURBO</Text>
        <Text>Ano: 2021/2021</Text>
        <Text>Preço: R$ 2.350.000</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'start',
  },
  scrollView:{
    alignSelf: 'center',
    justifyContent: 'center',
    width: 320,
    height: 280,
    borderRadius: 5,
    flexGrow : 1, 
  },  
  box: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRidus: 5,
    borderColor: 'black',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    height: 240,
    width: 150,
  },
  texto: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default App;
