import React, { useEffect } from 'react';
import CardFrete from './CardFrete';
import Loading from '../Loading/Loading';
import listarFretes from '../../services/ListarFretes';
import { ScrollView } from 'react-native';

const teste = [ {
  titulo: 'Frete 1',
}, {
  titulo: 'Frete 2',
}];

async function consultarFretes(){
  const fretes = await listarFretes();
  return fretes;
}

export default function ListagemFretes(){  
  const [fretes, setFretes] = React.useState([]);    
  const [carregado, setCarregado] = React.useState(false);

  useEffect(() =>  {
    if(carregado){
      return;
    }     
    console.log("Cheguei");
    consultarFretes().then(res => {
      setFretes(res);
      setCarregado(true);    
    }).catch(err => {

    });       
  }, [carregado]);
  
  if(!carregado){
    return (
      <Loading/>
    );
  }

    return(        
         <ScrollView> 
            {            
              fretes.map((frete, index) => {
                return <CardFrete key={index} frete={frete} />
              })
            }      
          </ScrollView>        
    );

}