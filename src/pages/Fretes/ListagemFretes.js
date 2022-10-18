import React, { useEffect } from 'react';
import CardFrete from './CardFrete';
import Loading from '../Loading/Loading';
import listarFretes from '../../services/ListarFretes';
import { ScrollView, View, TextInput, Text } from 'react-native';
import styles from '../css/Styles';

async function consultarFretes(){
  const fretes = await listarFretes();
  return fretes;
}

export default function ListagemFretes(){  
  const [fretes, setFretes] = React.useState([]);    
  const [fretesOriginais, setFretesOriginais] = React.useState([]);
  const [carregado, setCarregado] = React.useState(false);

  useEffect(() =>  {
    if(carregado){
      return;
    }     
    
    consultarFretes().then(res => {
      setFretes(res);
      setFretesOriginais(res);
      setCarregado(true);    
    }).catch(err => {

    });       
  }, [carregado]);
  
  const filtrarFrete = (filtro) => {             
    if(filtro.length > 0) {
      var fretesFiltrados;
       
      fretesFiltrados = fretesOriginais.filter(frete => frete.local_coleta.toLowerCase().includes(filtro.toLowerCase()));

      setFretes(fretesFiltrados);      
    }else {      
      setFretes(fretesOriginais);
    }

  };

  if(!carregado){
    return (
      <Loading/>
    );
  }

    return(
        <View>          
          <TextInput
            style={styles.input}                        
            placeholder="Pesquise pela cidade de coleta"
            onChangeText={text => filtrarFrete(text)}          
          />
          {fretes.length > 0 ? 
            <ScrollView 
              style={styles.scrollViewFrete}
              showsVerticalScrollIndicator={false}
            > 
              {          
                fretes.map((frete, index) => {
                  return <CardFrete key={index} frete={frete} />
                })
              }      
            </ScrollView> 
            : <Text>Sem dados encontrados!</Text>}  
        </View>
    );

}