import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Text, Image } from 'react-native';
import styles from '../css/Styles';

export default function ValorCarga({frete}){
    //verificar se valor do frete é igual a 0    
    var valorCarga = 1;
    if(frete.valor == "0"){
        valorCarga = "Á Combinar";
    }else {
        valorCarga = frete.valor;
    }    
    return (
        <>
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/iconeValorCarga.png')}                                    
                />
                Valor R$
            </Text>            
            <Text style={styles.textoCard}>{valorCarga}</Text>
        </>
    );
}
