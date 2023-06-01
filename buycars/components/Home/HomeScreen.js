import React, { useState } from 'react';
import {View, Text, Image, FlatList, Linking, Button} from 'react-native';
import {HomeStyles} from './HomeStyles'
import PhotoCars  from './PhotoCars';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
  const [cars, setCars] = useState([
    { key: "1", 
      titulo: 'Ferrari 812 GTS', 
      ano: '2022/2022',  
      motor: '6.5 V12', 
      valor: 'R$ 7.700.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9245/foto-Album-de-FERRARI-812-A8496-646b88cdef45c.webp',
      font: 'https://www.paitomotors.com.br/veiculo/ferrari-812-gts-2022-2022/8496'
    },
    { key: "2", 
      titulo: 'McLaren 720s', 
      ano: '2019/2020',  
      motor: '4.0L V8 TWIN TURBO',  
      valor: 'R$ 5.900.000,00', 
      local: 'Araras-SP', 
      img: "https://autobusiness.com.br/assets/img/albuns/album_7844/foto-Album-de-MCLAREN-720S-A7113-638f8a6d3c32f.webp",
      font: 'https://www.paitomotors.com.br/veiculo/mclaren-720s-spider-novitec-n-largo-2019-2020/7113'
    },
    { key: "3", 
      titulo: 'Land Rover Discovery D300 Metropolitan Edition', 
      ano: '2023/2023',  
      motor: '3.0L 6cil TURBO DIESEL', 
      valor: 'R$ 800.000,00', 
      local: 'Araras-SP', 
      img: "https://autobusiness.com.br/assets/img/albuns/album_8947/foto-Album-de-LAND-ROVER-DISCOVERY-A8200-6437f4a278c79.webp",
      font: 'https://www.paitomotors.com.br/veiculo/land-rover-discovery-d300-metropolitan-edition-2023-20232023-05-25/8200'
    },
    { key: "4", 
      titulo: 'Lamborghini Huracan STO', 
      ano: '2022/2022',  
      motor: '5.2 V10', 
      valor: 'R$ 5.100.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9076/foto-Album-de-LAMBORGHINI-HURACAN-A8329-6453da01f0c07.webp',
      font: 'https://www.paitomotors.com.br/veiculo/lamborghini-huracan-sto-2022-20222023-05-04/8329'
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
      motor: '6 cilindros em linha, 3.0L TWIN TURBO', 
      valor: 'R$ 950.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9266/foto-Album-de-BMW-M3-A8515-646d067678363.webp',
      font: 'https://www.paitomotors.com.br/veiculo/bmw-m3-competition-2021-20222023-05-23/8515'
      },
      { key: "7", 
      titulo: 'Audi RS 6 Avant', 
      motor: '4.0L V8 TURBO FSI',  
      valor: 'R$ 1.050.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9042/foto-Album-de-AUDI-RS-6-A8295-644a900939133.webp',
      font: 'https://www.paitomotors.com.br/veiculo/audi-rs-6-avant-2020-20212023-05-25/8295'
      },
      { key: "8", 
      titulo: 'FORD F-150 Shelby Super Snake', 
      motor: '  Coyote 5.0l V8 Supercharge',   
      valor: 'R$ 1.550.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9108/foto-Album-de-FORD-F-150-A8361-645567285db9d.webp',
      font: 'https://www.paitomotors.com.br/veiculo/ford-f-150-shelby-super-snake-sport-2021-2021/8361'
      },
      { key: "9", 
      titulo: 'Mercedes M 63', 
      motor: '4.0L V8 BI TURBO',   
      valor: 'R$ 1.990.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_9221/foto-Album-de-MERCEDES-AMG-A8474-646bab340f24a.webp',
      font: 'https://www.paitomotors.com.br/veiculo/mercedes-amg-g-63-2020-20212023-05-27/8474'
      },
      { key: "10", 
      titulo: 'McLaren 765LT', 
      motor: '4.0L V8 TWIN TURBO',   
      valor: 'R$ 5.900.000,00', 
      local: 'Araras-SP', 
      img: 'https://autobusiness.com.br/assets/img/albuns/album_7062/album-Album-de-MCLAREN-765lt-A6347-62f529c0e6ecf.jpg',
      font: 'https://www.paitomotors.com.br/veiculo/mclaren-765lt--2021-20212022-10-21/6347'
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
