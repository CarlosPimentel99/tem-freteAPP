import React from 'react';
import { Text, Image } from 'react-native';
import styles from '../css/Styles';

export default function LocalEntregaCard({frete}){
    return (
        <>
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/iconeLocalEntrega.png')}                
                    style={styles.icone}
                />
                Local de Entrega
            </Text>
            <Text style={styles.textoCard}>{frete.local_entrega}</Text>
        </>
    );
}
