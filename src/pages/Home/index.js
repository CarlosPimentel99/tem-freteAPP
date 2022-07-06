import React from 'react';
import { 
    View, 
    Text,     
    Image,  
    TouchableOpacity,
  } from 'react-native';
import styles from '../css/Styles';
import { Searchbar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListagemFretes from '../Fretes/ListagemFretes';

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
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Tem Frete</Text>        
          <TouchableOpacity 
            style={styles.button}
            onPress={deslogar}
            >
            <Text style={styles.Logout}>Sair</Text>
          </TouchableOpacity>
        </Animatable.View>
      
        <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>                
          <Image style={styles.containerFundo}
            source={require('../../assets/fundo.png')}
          />
          {/* <Searchbar style={styles.search} placeholder="Buscar..." /> */}
          <ListagemFretes/>
        </Animatable.View>      
      </View>
    );        
}