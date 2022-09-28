import React from 'react';
import { Card, Button } from 'react-native-paper';
import { Text, StyleSheet, Image, Share, View} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from '../css/Styles';
import TituloCard from './TituloCard';
import TipoCaminhaoCard from './TipoCaminhaoCard';
import LocalEntregaCard from './LocalEntregaCard';
import LocalColetaCard from './LocalColetaCard';
import Compartilhar from '../../services/Compartilhar';

export default function CardFrete({frete}){
  const navigation = useNavigation();  

  const onShare = async () => {
    try {
      const mensagem = 'Ola! da uma conferida nesse Frete: ' + frete.titulo + '\n' + 'Tipo de caminhão: ' + frete.tp_caminhao + '\n' + 'Local de coleta: ' + frete.local_coleta + ' \n' + 'Local de entrega: ' + frete.local_entrega + '\n' + 'Não tem o app? Baixe e aproveite: https://play.google.com/store/apps/details?id=com.temfretecarga';  

      const result = await Share.share({
        message: mensagem
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

    return (
        <Card style={styles.card}>
          {/* <TituloCard frete={frete}/>           */}
          <TipoCaminhaoCard frete={frete}/>
          <LocalColetaCard frete={frete}/>
          <LocalEntregaCard frete={frete}/>
          <View style={stylesLocal.containerDoBotao}>
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
            <Button 
              onPress={onShare} style={stylesLocal.buttonCardCompartilhar}
              // icon={
              //   require('../../assets/icons/iconeCompartilhar.png')
              // }              
              // mode="contained"
              icon={() => (
                <Image
                  source={require('../../assets/icons/iconeCompartilhar.png')}
                  style={{ marginStart: 10, marginTop: 5 }}
                />
              )}
              mode="contained"
            >              
                <Text style={styles.textoBotaoCompartilhar}>
                  Compartilhar
                </Text>              
            </Button>          
          </View>     
        </Card>
    );
}

const stylesLocal = StyleSheet.create({
  containerDoBotao: {
    marginTop: 10,
    marginStart: '5%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: '5%',            
  },
  buttonCardVisualizar: { 
    width: 140,
    height: 40,
    backgroundColor: '#DF4B48',        
  },
  buttonCardCompartilhar: {  
    width: 140,
    height: 40,
    backgroundColor: '#1D253B',               
  },
  icone: {    

  }
});