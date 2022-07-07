import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import styles from '../css/Styles';

export default function TituloCard({frete}){
    return (
        <>            
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/IconeTituloFrete.png')}                
                    style={styles.icone}
                />
                Titulo
                </Text>
            <Text style={styles.textoCard}>{frete.titulo}</Text>
        </>
    );
}


