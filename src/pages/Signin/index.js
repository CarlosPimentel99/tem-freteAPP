import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';
import EfetuarLogin from '../../services/Login';

export default function Signin() {  
  const [cpf, setcpf] = useState('');
  const [senha, setSenha] = useState('');
  const [messageErro, setMessageErro] = useState('');
  const navigation = useNavigation();

  const tentarLogar = async () => {
    try{            
      const token = await EfetuarLogin(cpf, senha); 
      console.log(token)     
    }catch(erro){
      setMessageErro(erro.message);
    }    
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem Vindo(a)</Text>
      </Animatable.View>
      
      <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>        
            <Text style={styles.title}>CPF</Text>        
            <TextInputMask 
              type={'cpf'}        
              value={cpf}
              onChangeText={text => setcpf(text)}
              style={styles.input} 
              placeholder="Digite seu CPF"           
            />
            <Text style={styles.title}>Senha</Text>
            <TextInput
              style={styles.input}          
              secureTextEntry={true}
              onChangeText={text => setSenha(text)}
              placeholder="Digite sua senha"           
            />
            <Text style={styles.messageErro}>{messageErro}</Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={tentarLogar}
            >        
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.buttonRegister}
              onPress={() => navigation.navigate('RegisterMotorista')}
            >
              <Text style={styles.registerText}>Ainda Não possui uma conta? Cadastre-se agora!</Text>
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
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',    
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',    
    color: '#FFFFFF',    
  },
  messageErro: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  containerForm: {      
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,   
    paddingStart: '5%', 
    paddingEnd: '5%',
  },  
  title: {    
    fontSize: 20,
    marginTop: 28,    
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,            
  },
  button: {
    backgroundColor: '#DF4B48',
    width: '80%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 30,
    alignSelf: 'center',    
  },
  registerText: {
    color: '#a1a1a1',
  }
});