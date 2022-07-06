import React, { useEffect } from 'react';
import { Card, Button, Searchbar } from 'react-native-paper';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image,  
  TouchableOpacity,
} from 'react-native';
import Frete from '../../models/frete';
import CardFrete from './CardFrete';
const teste = [ {
  titulo: 'Frete 1',
}, {
  titulo: 'Frete 2',
}];

export default function ListagemFretes(){  
  const [fretes, setFretes] = React.useState([]);    
  const [carregado, setCarregado] = React.useState(false);

  useEffect(() =>  {
    if(carregado){
      return;
    }     

    // const fretes = await consultarFretes();
        
    setFretes(teste);
    setCarregado(true);
  }, [carregado]);
  
  if(!carregado){
    return (
      <Text>Aguarde</Text>
    );
  }

    return(
        <>        
          {
            fretes.map((frete, index) => {
              return <CardFrete key={index} frete={frete} />
            })
          }                    
        </>
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