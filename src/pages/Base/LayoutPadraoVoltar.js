import React from 'react';
import {     
    Text,     
    Image,  
    TouchableOpacity,
  } from 'react-native';
import styles from '../css/Styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';

export default function LayoutPadraoVoltar({titulo}) {
    const navigation = useNavigation(); 

    const voltar = async () => {                              
        navigation.goBack();      
    }

    return (
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>{titulo}</Text>        
          <TouchableOpacity 
            style={styles.button}
            onPress={voltar}
            >
            <Text style={styles.Logout}>
              <Image 
                    source={require('../../assets/icons/iconeVoltar.png')}                
                    style={styles.icone}
              />
              Voltar
            </Text>
          </TouchableOpacity>
        </Animatable.View>
    );
}