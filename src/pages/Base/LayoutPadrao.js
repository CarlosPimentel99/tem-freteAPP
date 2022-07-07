import React from 'react';
import {     
    Text,     
    Image,  
    TouchableOpacity,
  } from 'react-native';
import styles from '../css/Styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LayoutPadrao() {
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
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Tem Frete</Text>        
          <TouchableOpacity 
            style={styles.button}
            onPress={deslogar}
            >
            <Text style={styles.Logout}>
              <Image 
                    source={require('../../assets/icons/iconeLogout.png')}                
                    style={styles.icone}
              />
              Sair
            </Text>
          </TouchableOpacity>
        </Animatable.View>
    );
}