import React from 'react';
import { Card, Button } from 'react-native-paper';
import { Text, StyleSheet, Image } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from '../css/Styles';
import TituloCard from './TituloCard';
import TipoCaminhaoCard from './TipoCaminhaoCard';
import LocalEntregaCard from './LocalEntregaCard';
import LocalColetaCard from './LocalColetaCard';

function teste ({valor}){
    return [valor, valor * 2, valor * 3];
}

const obj = {
    valor: 123
};

const [x1,x2,x3] = teste(obj);

export default function CardFrete({frete}){
  const navigation = useNavigation();  

    return (
        <Card style={styles.card}>
          <TituloCard frete={frete}/>          
          <TipoCaminhaoCard frete={frete}/>
          <LocalColetaCard frete={frete}/>
          <LocalEntregaCard frete={frete}/>        
            <Button style={stylesLocal.buttonCardVisualizar} onPress={() => navigation.navigate('ExibicaoFrete', {frete})
            }>
              <Image 
                source={require('../../assets/icons/iconeVisualizar.png')}
                style={stylesLocal.icone}
              />
              <Text style={styles.textoBotaoVisualizar}>
                    Visualizar
              </Text>
            </Button>
            <Button onPress={() => navigation.navigate('Loading')} style={stylesLocal.buttonCardCompartilhar}>            
              <Image 
                source={require('../../assets/icons/iconeCompartilhar.png')}
                style={stylesLocal.icone}
              />
              <Text style={styles.textoBotaoCompartilhar}>Compartilhar</Text>
            </Button>          
        </Card>
    );
}

const stylesLocal = StyleSheet.create({
  buttonCardVisualizar: {
    width: 180,
    position: 'absolute',
    marginTop: 30,
    alignSelf: 'flex-end',                      
    backgroundColor: '#DF4B48',
  },
  buttonCardCompartilhar: {  
    width: 180,
    position: 'absolute',
    marginTop: 80,
    backgroundColor: '#1D253B',
    alignSelf: 'flex-end',    
  },
});