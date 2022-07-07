import React from 'react';
import { Text, Image } from 'react-native';
import styles from '../css/Styles';

export default function TipoCaminhaoCard({frete}){
    return (
        <>
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/IconeTipoCaminhao.png')}                
                    style={styles.icone}
                />
                Tipo do Caminhão
            </Text>
            <Text style={styles.textoCard}>{frete.tp_caminhao}</Text>
        </>
    );
}
