import React from 'react';
import { Card, Button } from 'react-native-paper';
import { Text, StyleSheet, Image } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from '../css/Styles';
import TituloCard from './TituloCard';
import TipoCaminhaoCard from './TipoCaminhaoCard';
import LocalEntregaCard from './LocalEntregaCard';
import LocalColetaCard from './LocalColetaCard';
import Compartilhar from '../../services/Compartilhar';

// function teste ({valor}){
//     return [valor, valor * 2, valor * 3];
// }

// const obj = {
//     valor: 123
// };

// const [x1,x2,x3] = teste(obj);

// const compartilharFrete = (frete) => {
//   const mensagem = 'Ola! da uma conferida nesse Frete: ' + frete.titulo + '\n' + 'Tipo de caminhão: ' + frete.tp_caminhao + '\n' + 'Local de coleta: ' + frete.local_coleta + ' \n' + 'Local de entrega: ' + frete.local_entrega + '\n' + 'Não tem o app? Baixe e aproveite: https://play.google.com/store/apps/details?id=com.temfretecarga';  

//   Compartilhar(mensagem);
// }


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
            <Button /*onPress={() => compartilharFrete(frete)}*/ style={stylesLocal.buttonCardCompartilhar}>            
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