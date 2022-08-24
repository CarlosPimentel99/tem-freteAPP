import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert} from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native';
import styles from '../css/Styles';
import EnviarParaSuporte from '../../services/EnviarParaSuporte';

export default function Suporte() {  

    const navigation = useNavigation();     
    const [messageErro, setMessageErro] = useState('');

    const [nomeCompleto, setNomeCompleto] = useState('');    
    const [cell, setcell] = useState('');  
    const [mensagemSuporte, setMensagemSuporte] = useState('');    

    const enviarParaSuporte = async () => {  
        setMessageErro("");
        try{
            const mensagem = await EnviarParaSuporte(nomeCompleto, cell, mensagemSuporte);
            if(mensagem === "sucesso"){            
                Alert.alert("Solicitação enviada com sucesso!");
                navigation.replace('Signin');
            }else {
                 Alert.alert(mensagem);
            }
        }catch(erro){
            setMessageErro(erro.message);     
        }                
    }

    return (
        <View style={styles.containerRegisterMotorista}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeaderRegisterMotorista}>
            <Text style={styles.messageRegisterMotorista}>Suporte</Text>
          </Animatable.View>
        
          <Animatable.View animation="fadeInRight" delay={1000} style={styles.containerFormRegisterMotorista}>
            <Image style={styles.containerFundo}
                source={require('../../assets/fundo.png')}
            />
            <ScrollView>                
                  <TextInput
                      style={styles.input}                        
                      placeholder="Nome Completo"
                      onChangeText={text => setNomeCompleto(text)}
                      value={nomeCompleto}
  
                  />                             
                  <TextInputMask
                      type={'cel-phone'}
                      options={{
                          maskType: 'BRL', 
                          withDDD: true, 
                          dddMask: '(99) '
                      }}
                      value={cell}
                      onChangeText={text => setcell(text)}
                      style={styles.input}                        
                      placeholder="Telefone"
                  />                                                   
                  <TextInput
                    style={styles.inputTextArea}                              
                    placeholder="Como podemos ajuda-lo?"
                    onChangeText={text => setMensagemSuporte(text)}      
                    multiline = {true}
                    numberOfLines = {5}
                     value={mensagemSuporte}
                  />
  
                  <Text style={styles.messageErro}>{messageErro}</Text>
  
                  <TouchableOpacity 
                      style={styles.buttonLoginCadastrar}
                      onPress={enviarParaSuporte}
                  >        
                      <Text style={styles.buttonTextLoginCadastrar}>Enviar</Text>
                  </TouchableOpacity>     
              </ScrollView>       
          </Animatable.View>      
      </View>
    );
  
}