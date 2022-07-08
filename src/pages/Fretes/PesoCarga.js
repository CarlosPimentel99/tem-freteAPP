import React from 'react';
import { Text, Image } from 'react-native';
import styles from '../css/Styles';

export default function PesoCarga({frete}){
    return (
        <>
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/IconePesoCarga.png')}                                    
                />
                Peso da Carga
            </Text>
            <Text style={styles.textoCard}>{frete.peso_carga}</Text>
        </>
    );
}
