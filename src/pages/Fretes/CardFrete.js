import React, { useEffect } from 'react';
import { Card, Button, Searchbar } from 'react-native-paper';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image,  
  TouchableOpacity,
} from 'react-native';

function teste ({valor}){
    return [valor, valor * 2, valor * 3];
}

const obj = {
    valor: 123
};

const [x1,x2,x3] = teste(obj);

export default function CardFrete({frete}){
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
            <Button onPress={() => navigation.navigate('Signin')} style={styles.botaoCompartilhar}>
              <Text style={styles.textoBotaoCompartilhar}>Compartilhar</Text>
            </Button>
          </Card.Actions>
        </Card>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DF4B48',
    },  
    containerFundo: {
      position: 'absolute',      
      width: '111%',
      height: '100%',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,  
    },
    containerBotao: {
      flexDirection: 'row',      
      alignItems: 'center',      
      justifyContent: 'center',      
  
    },
    botaoVisualizar: {
      backgroundColor: '#DF4B48',   
      marginRight: '2.5%', 
    },
    textoBotaoVisualizar: {
      color: '#FFFFFF',
    },
    botaoCompartilhar:{
      backgroundColor: 'blue',     
      marginLeft: '2.5%', 
    },
    textoBotaoCompartilhar: {
      color: '#FFFFFF',
    },
    containerHeader: {
      marginTop: '4%',
      marginBottom: '4%',
      paddingStart: '5%',    
    },
    message: {
        marginStart: '3%',
        position: 'absolute',
        alignSelf: 'flex-start',
        fontSize: 25,
        fontWeight: 'bold',    
        color: '#FFFFFF',    
    },
    button: {
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff',
        width: '20%',
        borderRadius: 4,                
        justifyContent: 'center',
        alignItems: 'center',    
        marginEnd: '3%',    
  
      },
    Logout: {
        fontSize: 20,        
        color: '#DF4B48',                        
    },    
    containerForm: {      
      flex: 2,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,   
      paddingStart: '5%', 
      paddingEnd: '5%',
    },  
    search: {
      marginTop: '4%',
    },
    card: {
        marginTop: '4%',        
        paddingEnd: '3%'  
    }
  });