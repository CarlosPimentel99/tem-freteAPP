import React from 'react';
import { Text, Image } from 'react-native';
import styles from '../css/Styles';

export default function Observacao({frete}){
    return (
        <>            
            <Text style={styles.titulosCard}>
                <Image 
                    source={require('../../assets/icons/iconeObservacao.png')}                                    
                />
                Observação
                </Text>
            <Text style={styles.textoCard}>{frete.observacao}</Text>
        </>
    );
}


