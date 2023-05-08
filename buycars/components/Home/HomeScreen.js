import {View, Text, Image, FlatList, Linking, ScrollView} from 'react-native';
import {HomeStyles} from './HomeStyles'
import PhotoCars  from './PhotoCars';

export default function Home(){
  let img = "'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202301/20230126/MERCEDESBENZ-G-63-AMG-4.0-V8-TURBO-GASOLINA-MAGNO-EDITION-4MATIC-SPEEDSHIFT-wmimagem14413923425.jpg'"
  const cars = [
    {key: "1", titulo: 'Dev. Front End Sênior', km: 'PJ', valor: 'R$ 22.000,00', local: 'Remoto', img},
          {key: "2", titulo: 'Dev. Back End Sênior', contrato: 'CLT', salario: 'R$ 15.000,00', local: 'Remoto'},
          {key: "3", titulo: 'Dev. Front End Jr', contrato: 'CLT ou PJ', salario: 'R$ 5.000,00', local:'Remoto'},
          {key: "4", titulo: 'Dev Ops', contrato: 'PJ', salario: 'R$ 8.000,00', local: 'Remoto'},
          {key: "5", titulo: 'Dev. Back End', contrato: 'CLT ou PJ', salario: 'R$ 15.000,00', local: 'Hibrido'},
          {key: "6", titulo: 'Dev. Front End', contrato: 'PJ', salario: 'R$ 5.000,00', local: 'Remoto'},
          {key: "7", titulo: 'Dev. Full Stack', contrato: 'CLT', salario: 'R$ 8.000,00', local: 'Hibrido'},
          {key: "8", titulo: 'Dev. Full Stack', contrato: 'CLT', salario: 'R$ 11.000,00', local: 'Remoto'},
          {key: "9", titulo: 'Dev. Front End', contrato: 'PJ', salario: 'R$ 4.500,00', local: 'Hibrido'},
  ]
  return(
    <ScrollView>
      <View style={HomeStyles.container}> 
          <FlatList
            data={cars}
            renderItem={({item, idex}) => {
              return(
                <View style={HomeStyles.card}>
                  <View>
                    <PhotoCars/>
                  </View>
                  <View>
                    <Image source={{uri: img}}/>
                    <Text>Carro: {item.titulo}</Text>
                    <Text>Ano: {item.contrato}</Text>
                    <Text>Kilometragem: {item.salario}</Text>
                    <Text>Potencia: {item.local}</Text>
                    <Text
                      onPress={() =>{
                        Linking.openURL('https://reactnative.dev')
                      }}>
                      Veja mais detalhes sobre o Veículo!
                    </Text>
                  </View>
                </View>
              )
            }}
            KeyExtractor={(elemento) => String(elemento.key)}
          />
      </View>
    </ScrollView>
  )
}


// https://snack.expo.dev/@kingaspx/guj-post-exemplo
// https://reactnativeelements.com/docs
