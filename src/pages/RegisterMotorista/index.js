import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert} from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import styles from '../css/Styles';
import CadastrarMotorista from '../../services/CadastrarMotorista';

  export default function RegisterMotorista() {
    const navigation = useNavigation();     
    const [messageErro, setMessageErro] = useState('');

    const [cell, setcell] = useState('');
    const [cpf, setcpf] = useState('');
    const [placa, setPlaca] = useState('');
    
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [senha, setSenha] = useState('');
    
    const [tipoMotorista, setTipoMotorista] = useState(['Tipo Motorista','Autônomo', 'Funcionário', 'Gestor de Frota e Motorista', 'Gestor de Frota']);
    const [tipoMotoristaSelecionado, setTipoMotoristaSelecionado] = useState('');    
    
    const tentaCadastrar = async () => {
      setMessageErro('');
      try{                    
        const mensagem = await CadastrarMotorista(nomeCompleto, cpf, cell, placa, tipoMotoristaSelecionado, senha);                                        
        if(mensagem === "sucesso"){
          Alert.alert('Motorista cadastrado com sucesso!');
          navigation.navigate('Home');
        }
      }catch(erro){
        setMessageErro(erro.message);
      }    
    }

    return (
      <View style={styles.containerRegisterMotorista}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeaderRegisterMotorista}>
          <Text style={styles.messageRegisterMotorista}>Cadastro de Motorista</Text>
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
                    type={'cpf'}        
                    value={cpf}
                    onChangeText={text => setcpf(text)}
                    style={styles.input} 
                    placeholder="Digite seu CPF"                                    
                    //key={cpf}  
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
                
                <TextInputMask
                    type={'custom'}
                    options={{
                        mask: 'SSS-SSSS'                    
                    }}                    
                    value={placa}
                    onChangeText={text => setPlaca(text)}              
                    style={styles.input}              
                    placeholder="Placa do Veículo"
                />

                <Picker
                  style={styles.input}
                  selectedValue={tipoMotoristaSelecionado}
                  value={tipoMotoristaSelecionado}                
                  onValueChange={(itemValue, itemIndex) =>
                    setTipoMotoristaSelecionado(itemValue)
                  }        

                >
                    {                      
                      tipoMotorista.map(tipo => {                        
                          return <Picker.Item label={tipo} value={tipo} />                        
                      })
                    }                
                </Picker>                                
                <TextInput
                  style={styles.input}          
                  secureTextEntry={true}
                  placeholder="Digite sua senha"
                  onChangeText={text => setSenha(text)}      
                  value={senha}
                />

                <Text style={styles.messageErro}>{messageErro}</Text>

                <TouchableOpacity 
                    style={styles.buttonLoginCadastrar}
                    onPress={tentaCadastrar}
                >        
                    <Text style={styles.buttonTextLoginCadastrar}>Cadastrar</Text>
                </TouchableOpacity>     
            </ScrollView>       
        </Animatable.View>      
    </View>
  );
}

// const styles = StyleSheet.create({
//     containerRegisterMotorista: {
//       flex: 1,
//       backgroundColor: '#DF4B48',
//     },  
//     containerHeaderRegisterMotorista: {
//       marginTop: '14%',
//       marginBottom: '8%',
//       paddingStart: '5%',    
//     },
//     messageRegisterMotorista: {
//       fontSize: 28,
//       fontWeight: 'bold',    
//       color: '#FFFFFF',    
//     },
//     containerFormRegisterMotorista: {      
//       flex: 1,
//       backgroundColor: '#FFFFFF',
//       borderTopLeftRadius: 25,
//       borderTopRightRadius: 25,   
//       paddingStart: '5%', 
//       paddingEnd: '5%',
//     },  
//     title: {    
//       fontSize: 20,
//       marginTop: 28,    
//     },
//     input: {
//       borderBottomWidth: 1,
//       height: 40,
//       marginBottom: 12,
//       fontSize: 16,            
//     },
//     button: {
//       backgroundColor: '#DF4B48',
//       width: '80%',
//       borderRadius: 4,
//       paddingVertical: 8,
//       marginTop: 30,
//       justifyContent: 'center',
//       alignItems: 'center',
//       alignSelf: 'center',
//       marginBottom: '10%',
//     },
//     buttonText: {
//       color: '#FFFFFF',
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
//     buttonRegister: {
//       marginTop: 30,
//       alignSelf: 'center',        
//     },
//     registerText: {
//       color: '#a1a1a1',
//     }
//   });