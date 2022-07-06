import React from 'react';
import { Card, Button } from 'react-native-paper';
import { Text } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from '../css/Styles';

function teste ({valor}){
    return [valor, valor * 2, valor * 3];
}

const obj = {
    valor: 123
};

const [x1,x2,x3] = teste(obj);

export default function CardFrete({frete}){
  const navigation = useNavigation();
  const [carregado, setCarregado] = React.useState(false);

    return (
        <Card style={styles.card}>
          <Card.Title title={frete.titulo}/>                                    
          <Card.Content>
              <Text style={styles.text}>Caminhão: Carreta</Text>                
          </Card.Content>
          <Card.Content>
              <Text style={styles.text}>De: São Paulo - SP</Text>                
          </Card.Content>
          <Card.Content>
              <Text style={styles.text}>Para: Cuíaba - MT</Text>                
          </Card.Content>
          <Card.Actions style={styles.containerBotao}>
            <Button style={styles.botaoVisualizar} onPress={() => navigation.navigate('Signin')}>
              <Text style={styles.textoBotaoVisualizar}>
                    Visualizar
              </Text>
            </Button>
            <Button onPress={() => navigation.navigate('Loading')} style={styles.botaoCompartilhar}>
              <Text style={styles.textoBotaoCompartilhar}>Compartilhar</Text>
            </Button>
          </Card.Actions>
        </Card>
    );
}