import React from 'react';
import { 
    View,       
    Image,      
  } from 'react-native';
import styles from '../css/Styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListagemFretes from '../Fretes/ListagemFretes';
import LayoutPadrao from '../Base/LayoutPadrao';

export default function Home() {
    const navigation = useNavigation(); 

    const deslogar = async () => {
      try{                    
        await AsyncStorage.removeItem('token');                 
        navigation.replace('Welcome');
      }catch(erro){
        setMessageErro(erro.message);
      }    
    }

    return (
      <View style={styles.container}>
        <LayoutPadrao/>
      
        <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>                
          <Image style={styles.containerFundo}
            source={require('../../assets/fundo.png')}
          />          
          <ListagemFretes/>
        </Animatable.View>      
      </View>
    );        
}