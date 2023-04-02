import React, { Component } from 'react';
import { View, Text, Image, Center} from 'react-native';


export default function App(){
  
    let name = 'Matheus Henrique';
    let age = 21
    let curso = 'Sistemas para Internet'
    let img = 'https://avatars.githubusercontent.com/u/88057724?v=4';

  return(

      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      // #333235
        <View style={{backgroundColor:'#9D2BF5',height: 50, textAlign: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, fontStyle: 'Montserrat' }}>Bem vindo ao meu perfil!</Text>
        </View>

        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 250, margin: 30, display: 'flex', justifyContent: 'center', alignItens: 'center', borderRadius: 5 }}
        />

      <View style={{
        backgroundColor: '#CB95F5',
        width: 300,
        height: 400, 
        margin: 10,  
        display: 'flex', 
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 5
        }}>

        <View>
          <Text style={{ fontSize: 22, marginTop: 20, padding: 5
           }}>Minhas Informações</Text>

          <Text style={{ fontSize: 16, marginTop: 20, padding: 5 
           }}>{name}</Text>

          <Text style={{ fontSize: 16, padding: 5
           }}>Idade: {age} Anos</Text>

           <Text style={{ margin: 5, fontSize: 16, padding: 5
           }}>Graduação: {curso}</Text>

           <Text style={{fontSize: 16, fontWeight:'bold'}}>Profissão: </Text>
           <Text style={{ fontSize: 16, padding: 5
           }}>Estagiário em Processamento de Dados no Grupo Verreschi.</Text>

           <Text style={{fontSize: 16, fontWeight: 'bold'}}>Projetos</Text>
           <Text Text style={{ fontSize: 16, padding: 5}} >Trabalho de conclusão de curso focado em um gerenciador de estoque para lojas de calçados.</Text>
        </View>
      </View>

      </View>
    )
}


