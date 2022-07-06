import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity,    
  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import validarToken from '../../services/ValidarToken';

async function validaExistenciaToken() {  
  try {
    const token = await validarToken();    
    console.log(token);
    if (token) {      
      return true;
    }
    return false
  } catch (erro) {
    console.log(erro);
    return false;    
  }
}

export default function Welcome() {
    const navigation = useNavigation();
    const [existeToken, setExisteToken] = React.useState(false);  
    const [carregado, setCarregado] = React.useState(false);    

    validaExistenciaToken().then(res => {
      setExisteToken(res);
      setCarregado(true);
    }
    ).catch(err => {

    });

    if(!carregado){
      return (
        <Text>Aguarde</Text>
      );
    }
    if (existeToken) {
      navigation.navigate('Home');
    }
    
  return (
    <View style={styles.container}>
      <Image style={styles.containerFundo}
        source={require('../../assets/fundo.png')}
      />
      <View style={styles.containerLogo}>
        <Animatable.Image 
          source={require('../../assets/logoPreto.png')} 
          style={styles.logo}
          animation="flipInY"
      />            
      </View>
      
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Procurando alguma plataforma para encontrar frete?</Text>
          <Text style={styles.text}>Faça login para começar</Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Signin')}
            >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',    
  },
  containerLogo: {    
    flex: 2,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,    
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '6%',
    paddingEnd: '5%',    
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    alignSelf: 'center',
  },
  text: {
    color: '#a1a1a1',
    marginTop: 12,        
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#DF4B48',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',    
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
  },   
});