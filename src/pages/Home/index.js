import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image,  
    TouchableOpacity,
  } from 'react-native';
import { Card, Button, Searchbar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

export default function Home() {
    const navigation = useNavigation(); 

    const deslogar = async () => {
      try{            
        AsyncStorage.removeItem('instalura_token');   
        console.log(AsyncStorage.getItem('instalura_token'));           
        navigation.navigate('Welcome');
      }catch(erro){
        setMessageErro(erro.message);
      }    
    }

    return (
        <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Fretes</Text>        
        <TouchableOpacity 
            style={styles.button}
            onPress={deslogar}
            >
            <Text style={styles.Logout}>Sair</Text>
          </TouchableOpacity>
      </Animatable.View>
      
      <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>                
        <Image style={styles.containerFundo}
          source={require('../../assets/fundo.png')}
        />

        <Searchbar style={styles.search} placeholder="Buscar..." />

        <Card style={styles.card}>
          <Card.Title title="Tipo: Congelado"/>                                    
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
        <Card style={styles.card}>
          <Card.Title title="Tipo: Congelado"/> 
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
      </Animatable.View>      
    </View>
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