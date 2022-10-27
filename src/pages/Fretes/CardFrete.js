import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, View} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from '../css/Styles';
import TipoCaminhaoCard from './TipoCaminhaoCard';
import LocalEntregaCard from './LocalEntregaCard';
import LocalColetaCard from './LocalColetaCard';
import BotaoVisualizar from '../../Componentes/Botoes/Visualizar';
import BotaoCompartilhar from '../../Componentes/Botoes/Compartilhar';
import Observacao from './Observacao';

export default function CardFrete({frete}){
  const navigation = useNavigation();  
    return (
        <Card style={styles.card}>          
          <TipoCaminhaoCard frete={frete}/>
          <LocalColetaCard frete={frete}/>
          <LocalEntregaCard frete={frete}/>          
          <View style={stylesLocal.containerDoBotao}>            
            <BotaoVisualizar frete={frete}/>         
            <BotaoCompartilhar frete={frete}/>
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
});