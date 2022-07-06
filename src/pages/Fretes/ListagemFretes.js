import React, { useEffect } from 'react';
import CardFrete from './CardFrete';
import Loading from '../Loading/Loading';
import styles from '../css/Styles';

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
      <Loading/>
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