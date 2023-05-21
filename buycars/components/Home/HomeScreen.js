import React, { useState } from 'react';
import {View, Text, Image, FlatList, Linking, ScrollView} from 'react-native';
import {HomeStyles} from './HomeStyles'
import PhotoCars  from './PhotoCars';

export default function Home(){
  const [cars, setCars] = useState([
    { key: "1", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      km: '20', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://images.pexels.com/photos/11517500/pexels-photo-11517500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
      img: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202301/20230126/MERCEDESBENZ-G-63-AMG-4.0-V8-TURBO-GASOLINA-MAGNO-EDITION-4MATIC-SPEEDSHIFT-wmimagem14413923425.jpg"
    },
    { key: "4", 
      titulo: 'Ferrari GTO', 
      ano: '2020',  
      km: '20', 
      valor: 'R$ 2.200.000,00', 
      local: 'Araras-SP', 
      img: 'https://avatars.githubusercontent.com/u/88057724?v=4'
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
            <Text>{post.titulo} {post.ano}, {post.local}</Text>
            <Text>{post.km}Km</Text>
            <Text>{post.valor}</Text>
            <Text
              onPress={() =>{
                Linking.openURL('https://reactnative.dev')
              }}>
              Veja mais detalhes sobre o Veículo!
            </Text>
          </View>
      </View>
    );
  };

  return(
    <ScrollView>
      <View style={HomeStyles.container}> 
          <FlatList
            data={cars}
            // keyExtractor={(item) => item.id}
            keyExtractor={(elemento) => String(elemento.key)}
            renderItem={({item}) => <PostComponent post={item}/>}
           
          />
      </View>
    </ScrollView>
  )
}


// https://snack.expo.dev/@kingaspx/guj-post-exemplo
// https://reactnativeelements.com/docs
