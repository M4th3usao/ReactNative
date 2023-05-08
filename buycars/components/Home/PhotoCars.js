import {Image, View} from 'react-native';

export default function PhotoCars(){
  let img = 'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202301/20230126/MERCEDESBENZ-G-63-AMG-4.0-V8-TURBO-GASOLINA-MAGNO-EDITION-4MATIC-SPEEDSHIFT-wmimagem14413923425.jpg';
  return(
    <View>
     <Image 
        source={{uri: img}}
      />
    </View>
  )
}

export {PhotoCars};