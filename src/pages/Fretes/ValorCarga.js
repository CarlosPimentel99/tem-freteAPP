import React from 'react';
import { Text, Image } from 'react-native';
import styles from '../css/Styles';

export default function ValorCarga({frete}){
    return (
        <>
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/iconeValorCarga.png')}                                    
                />
                Valor R$
            </Text>
            <Text style={styles.textoCard}>{frete.valor}</Text>
        </>
    );
}
