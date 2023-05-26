import React, { useState } from 'react';
import {View, Text, Image, FlatList, Linking, ScrollView} from 'react-native';
import {HomeStyles} from './HomeStyles'
import PhotoCars  from './PhotoCars';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
  const [cars, setCars] = useState([
    { key: "1", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      km: '20', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_7944/foto-Album-de-MERCEDES-BENZ-A7213-63a4c6cb561f3.webp'
    },
    { key: "2", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      km: '20', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202301/20230126/MERCEDESBENZ-G-63-AMG-4.0-V8-TURBO-GASOLINA-MAGNO-EDITION-4MATIC-SPEEDSHIFT-wmimagem14413923425.jpg"
    },
    { key: "3", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      km: '20', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: "https://autobusiness.com.br/assets/img/albuns/album_5511/album-Album-de-BMW-M4-A-61e5b15f6ad16.jpg"
    },
    { key: "4", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      km: '20', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9076/foto-Album-de-LAMBORGHINI-HURACAN-A8329-6453da01f0c07.webp'
      },
         
  ]);
  const PostComponent = ({post}) => {
    return(
       <SafeAreaView style={HomeStyles.card}>
          <View style={HomeStyles.contentCard}>
            <Image 
              style={HomeStyles.img}
              source={{ uri: post.img }}
            />
            <Text>{post.titulo} {post.ano}, {post.km}Km</Text>
            <Text>{post.local}</Text>
            <Text>{post.valor}</Text>
            <Text
              onPress={() =>{
                Linking.openURL('https://reactnative.dev')
              }}>
              Veja mais detalhes sobre o Veículo!
            </Text>
          </View>
      </SafeAreaView>
    );
  };

  return(
    // <ScrollView>
      <View style={HomeStyles.container}> 
          <FlatList
            data={cars}
            /* // keyExtractor={(item) => item.id} */
            keyExtractor={(elemento) => String(elemento.key)}
            renderItem={({item}) => <PostComponent post={item}/>}
           
          />
      </View>
    /* </ScrollView> */
  )
}


// https://snack.expo.dev/@kingaspx/guj-post-exemplo
// https://reactnativeelements.com/docs
