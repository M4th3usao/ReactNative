import React, { useState } from 'react';
import {View, Text, Image, FlatList, Linking, Button} from 'react-native';
import {HomeStyles} from './HomeStyles'
import PhotoCars  from './PhotoCars';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
  const [cars, setCars] = useState([
    { key: "1", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      motor: '5.2 V12 BI TURBO', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_7944/foto-Album-de-MERCEDES-BENZ-A7213-63a4c6cb561f3.webp'
    },
    { key: "2", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      motor: '5.2 V12 BI TURBO',  
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202301/20230126/MERCEDESBENZ-G-63-AMG-4.0-V8-TURBO-GASOLINA-MAGNO-EDITION-4MATIC-SPEEDSHIFT-wmimagem14413923425.jpg"
    },
    { key: "3", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      motor: '5.2 V12 BI TURBO', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: "https://autobusiness.com.br/assets/img/albuns/album_5511/album-Album-de-BMW-M4-A-61e5b15f6ad16.jpg"
    },
    { key: "4", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      motor: '5.2 V12 BI TURBO', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9076/foto-Album-de-LAMBORGHINI-HURACAN-A8329-6453da01f0c07.webp'
      },
      { key: "5", 
      titulo: 'Aston Martin V12 Vantage Coupé', 
      ano: '2022/2023',  
      motor: '5.2 V12 BI TURBO', 
      valor: 'R$ 4.790.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_8919/foto-Album-de-ASTON-MARTIN-V12-VANTAGE-A8172-6434559103e7c.webp',
      font: 'https://www.paitomotors.com.br/veiculo/aston-martin-v12-vantage-coupe-2022-2023/8172',
      },
         
      { key: "6", 
      titulo: 'M3', 
      ano: '2021/2022',  
      motor: '6 cilindros em linha, 3.0L Twin Turbo', 
      valor: 'R$ 950.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9266/foto-Album-de-BMW-M3-A8515-646d0677f1f5e.webp',
      font: 'https://www.paitomotors.com.br/veiculo/bmw-m3-competition-2021-20222023-05-23/8515'
      },
      { key: "7", 
      titulo: 'Ferrari GTO', 
      motor: '5.2 V12 BI TURBO',  
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9076/foto-Album-de-LAMBORGHINI-HURACAN-A8329-6453da01f0c07.webp'
      },
      { key: "8", 
      titulo: 'Ferrari GTO', 
      motor: '5.2 V12 BI TURBO',   
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9076/foto-Album-de-LAMBORGHINI-HURACAN-A8329-6453da01f0c07.webp'
      },
      { key: "9", 
      titulo: 'Ferrari GTO', 
      motor: '5.2 V12 BI TURBO',   
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9076/foto-Album-de-LAMBORGHINI-HURACAN-A8329-6453da01f0c07.webp'
      },
      { key: "10", 
      titulo: 'Ferrari GTO', 
      motor: '5.2 V12 BI TURBO',   
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9076/foto-Album-de-LAMBORGHINI-HURACAN-A8329-6453da01f0c07.webp'
      },
         
         
  ]);
  const PostComponent = ({post}) => {
    return(
       <View style={HomeStyles.card}>
          <View style={HomeStyles.contentCard}>
            <Image 
              style={HomeStyles.img}
              source={{ uri: post.img }}
            />
            <View style={HomeStyles.contentText}>
              <Text>{post.titulo} {post.ano}</Text>
              <Text>{post.motor}</Text>
              <Text>{post.local}</Text>
              <Text>{post.valor}</Text>
              <View style={HomeStyles.btnDetalhes}>
                <Text   
                  style={HomeStyles.btnDetalhesText}
                  onPress={() =>{
                    Linking.openURL(post.font)
                  }}>
                  Detalhes do Veículo
                </Text>
              </View>
            </View>
          </View>
      </View>
    );
  };

  return(
      <SafeAreaView style={HomeStyles.container}> 
          <FlatList
            data={cars}
            /* // keyExtractor={(item) => item.id} */
            keyExtractor={(elemento) => String(elemento.key)}
            renderItem={({item}) => <PostComponent post={item}/>}
            showsVerticalScrollIndicator={false}
          />
      </SafeAreaView>
  )
}

// no botão de new ter a possibilidade de fazer um create de um componente (possibilidade de implementação)
//na tela de profile conter um storage com sqlLite

// https://snack.expo.dev/@kingaspx/guj-post-exemplo
// https://reactnativeelements.com/docs
