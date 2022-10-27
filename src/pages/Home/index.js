import React from 'react';
import { 
    View,       
    Image,      
  } from 'react-native';
import styles from '../css/Styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListagemFretes from '../Fretes/ListagemFretes';
import LayoutPadrao from '../Base/LayoutPadrao';
import Loading from '../Loading/Loading';
import { validaExistenciaToken } from '../Welcome/validaExistenciaToken';
import { FAB, Portal, Provider } from 'react-native-paper';


export default function Home() {
    const navigation = useNavigation(); 
    const [existeToken, setExisteToken] = React.useState(false);  
    const [carregado, setCarregado] = React.useState(false);    

    const [estado, setEstado] = React.useState({ open: false });
    const AtualizaEstado = ({ open }) => setEstado({ open });
    const { open } = estado;

    validaExistenciaToken().then(res => {
      setExisteToken(res);
      setCarregado(true);
    }
    ).catch(err => {

    });

    if(!carregado){
      return (
        <Loading/>
      );
    }
    if (!existeToken) {
      navigation.replace('Welcome');
    }

    const deslogar = async () => {
      try{                    
        await AsyncStorage.removeItem('token');                 
        navigation.replace('Welcome');
      }catch(erro){
        setMessageErro(erro.message);
      }    
    }    

      return (
        <Provider>
          <View style={styles.container}>
            <LayoutPadrao/>
          
            <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>                
              <Image style={styles.containerFundo}
                source={require('../../assets/fundo.png')}
              />          
              <ListagemFretes/>
            </Animatable.View>      
          </View>            
          <Portal>
              <FAB.Group              
              open={open}
              icon={open ? 'note' : 'plus'}                          
              fabStyle={styles.botaoFlutuante}                      
              actions={[                  
                  {
                    icon: 'pencil',
                    label: 'Solicitar Carga',                    
                    color: '#DF4B48',
                    labelTextColor: ['black', 'bold'],                    
                    onPress: () => navigation.navigate("SolicitarCarga"),
                    small: false                    
                  },
              ]
            }
              onStateChange={AtualizaEstado}
              />
          </Portal>            
      </Provider>              
    );        
}