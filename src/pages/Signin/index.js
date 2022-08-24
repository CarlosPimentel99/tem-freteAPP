import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native';
import EfetuarLogin from '../../services/Login';;
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../css/Styles';

export default function Signin() {  
  const [cpf, setcpf] = useState('');
  const [senha, setSenha] = useState('');
  const [messageErro, setMessageErro] = useState('');
  const navigation = useNavigation();

  const tentarLogar = async () => {
    try{            
      const token = await EfetuarLogin(cpf, senha);                        
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home');      
    }catch(erro){
      setMessageErro(erro.message);
    }    
  }

  return (

    <View style={styles.containerLogin}>
      {/* <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeaderLogin}>      
        <Text style={styles.messageLogin}>Bem Vindo(a)</Text>
      </Animatable.View> */}
      
      <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerFormLogin}>
        <Image style={styles.containerFundo}
            source={require('../../assets/fundo.png')}
        />        
        <View style={styles.containerLogoLogin}>
          <Animatable.Image 
            source={require('../../assets/logoPreto.png')} 
            style={styles.logoLogin}
            animation="flipInY"
          />             
        </View>        
        <View style={styles.containerCamposLogin}>
          <TextInputMask 
            type={'cpf'}        
            value={cpf}
            onChangeText={text => setcpf(text)}          
            style={styles.inputLogin} 
            placeholder="Digite seu CPF"         
          />            
          <TextInput
            style={styles.inputLogin}          
            secureTextEntry={true}
            onChangeText={text => setSenha(text)}
            placeholder="Digite sua senha"           
          />
          <Text style={styles.messageErro}>{messageErro}</Text>
          <TouchableOpacity 
            style={styles.buttonLoginCadastrar}
            onPress={tentarLogar}
          >              
            <Text style={styles.buttonTextLoginCadastrar}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonRegisterLogin}
            onPress={() => navigation.navigate('RegisterMotorista')}
          >
            <Text>Ainda Não possui uma conta? Cadastre-se agora!</Text>
          </TouchableOpacity>  
          
          <TouchableOpacity 
            style={styles.buttonSuporte}           
            onPress={() => navigation.navigate('Suporte')}        
          >                                   
            <Text style={styles.buttonTextSuporte}>
              <Image 
                  source={require('../../assets/icons/iconeMensagemSuporte.png')                  
                }                
                style={styles.iconeMensagemSuporte}
              />
              Suporte
            </Text>
          </TouchableOpacity>
          
        </View>                          
      </Animatable.View>      
    </View>
  );
}

const styleLocal = StyleSheet.create({
  texto: {
    fontSize: 20,
    color: '#ff0000',
  }
});