import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert} from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import styles from '../css/Styles';

  export default function RegisterMotorista() {
    const [cell, setcell] = useState('');
    const [cpf, setcpf] = useState('');
    const [placa, setPlaca] = useState('');    
    const navigation = useNavigation(); 
    const [tipoMotorista, setTipoMotorista] = useState(['Autônomo', 'Funcionário', 'Gestor de Frota e Motorista', 'Gestor de Frota']);
    const [tipoMotoristaSelecionado, setTipoMotoristaSelecionado] = useState('');

    const cpfx = useState();

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
                />                                       
                <TextInputMask 
                    type={'cpf'}        
                    value={cpf}
                    onChangeText={text => setcpf(text)}
                    style={styles.input} 
                    placeholder="Digite seu CPF"      
                    onBlur={() => {
                      if((cpf.length < 14) && (cpf.length > 0)){
                        Alert.alert("CPF Inválido");
                        setcpf('');
                      }
                    }}           
                    key={cpfx}  
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
                  onValueChange={(itemValue, itemIndex) =>
                    setTipoMotoristaSelecionado(itemValue)
                  }
                  placeholder="Tipo de Motorista"                    
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
                />

                <TouchableOpacity 
                    style={styles.buttonLoginCadastrar}
                    onPress={() => navigation.navigate('Home')}
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