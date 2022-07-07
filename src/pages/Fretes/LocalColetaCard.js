import React from 'react';
import { Text, Image } from 'react-native';
import styles from '../css/Styles';

export default function LocalColetaCard({frete}){
    return (
        <>
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/iconeLogalColeta.png')}                
                    style={styles.icone}
                />
                Local de Coleta
            </Text>
            <Text style={styles.textoCard}>{frete.local_coleta}</Text>
        </>
    );
}
