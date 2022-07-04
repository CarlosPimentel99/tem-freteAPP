import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

  export default function RegisterMotorista() {
    const [cell, setcell] = useState('');
    const [cpf, setcpf] = useState('');
    const [placa, setPlaca] = useState('');    
    const navigation = useNavigation(); 
    const [tipoMotorista, setTipoMotorista] = useState(
        ['Autônomo', 'Funcionário', 'Gestor de Frota e Motorista', 'Gestor de Frota']
    );
    const [tipoMotoristaSelecionado, setTipoMotoristaSelecionado] = useState('');

    return (
        <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Cadastro de Motorista</Text>
        </Animatable.View>
      
        <Animatable.View animation="fadeInRight" delay={1000} style={styles.containerForm}>
            <ScrollView>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    style={styles.input}                        
                    placeholder="Nome Completo"           
                />    
                
                <Text style={styles.title}>CPF</Text>        
                <TextInputMask 
                    type={'cpf'}        
                    value={cpf}
                    onChangeText={text => setcpf(text)}
                    style={styles.input} 
                    placeholder="Digite seu CPF"           
                />
                <Text style={styles.title}>Telefone</Text>
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
                    placeholder="(99) 99999-9999"
                />

                <Text style={styles.title}>Placa</Text>
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

                <Text style={styles.title}>Tipo de Motorista</Text>                
                <Picker
                    selectedValue={'Selecione um Motorista'}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                        
                    <Picker.Item label="Java" value="java" />                    
                </Picker>
                
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    style={styles.input}          
                    secureTextEntry={true}
                    placeholder="Digite sua senha"           
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >        
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>     
            </ScrollView>       
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
      marginBottom: '10%',
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