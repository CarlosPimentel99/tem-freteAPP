import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from 'react';
import LayoutPadraoVoltar from '../Base/LayoutPadraoVoltar';
import styles from "../css/Styles";
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import SolicitarCargaServico from "../../services/SolicitarCarga";
import Radio from "../../Componentes/Botoes/Radio";


export default function SolicitarCarga(){

    const [nome, setNome] = React.useState();
    const [telefone, setTelefone] = React.useState();
    const [tipoCaminhao, setTipoCaminhao] = React.useState();
    const [tipoBau, setTipoBau ] = React.useState();
    const [regiao, setRegiao] = React.useState();    

    const validarCampos = () =>{
        try {
            if(nome == null || nome.length < 10) {
                throw new Error("Nome Completo inválido!");
            }else if (telefone == null ||telefone.length < 14) {
                throw new Error("Telefone inválido!");
            }else if (tipoCaminhao == null || tipoCaminhao.length < 4) {
                throw new Error("Tipo do Caminhão inválido!");
            }else if (regiao == null || regiao.length < 2) {
                throw new Error("Região inválida");
            }
            
            return true;
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const solicitarCarga = () => {
        var tipoBauSelecionado = "";

        if(tipoBau==0){
            tipoBauSelecionado = "gancheiro"
        }else {
            tipoBauSelecionado = "Liso"
        }

        const informacoes = {
            nome: nome,
            telefone: telefone,
            tipoBau: tipoBauSelecionado,
            tipoCaminhao: tipoCaminhao,
            regiao: regiao
        }
        
        if(validarCampos()){
            SolicitarCargaServico(informacoes);
        }
    }
    
  

    return (
        <View style={styles.container}>
            <LayoutPadraoVoltar titulo="Solicitar Carga"/>     

            <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>                
                <Image style={styles.containerFundo}
                    source={require('../../assets/fundo.png')}
                />

                <ScrollView>

                    <TextInput
                        style={styles.input}                        
                        placeholder="Nome Completo"
                        onChangeText={text => setNome(text)}
                        value={nome}
                    />   

                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL', 
                            withDDD: true, 
                            dddMask: '(99) '
                        }}
                        value={telefone}
                        onChangeText={text => setTelefone(text)}
                        style={styles.input}                        
                        placeholder="Telefone"
                    />
 
                    <TextInput
                        style={styles.input}                        
                        placeholder="Tipo do Caminhão"
                        onChangeText={text => setTipoCaminhao(text)}
                        value={tipoCaminhao}
                    />  

                    <Radio 
                        title={"Tipo de Bau?"}
                        selected={tipoBau}
                        options={['Gancheiro', 'Liso']} 
                        horizontal={true} 
                        onChangeSelect={(opt, i)=> setTipoBau(i)}
                    />

                     

                    <TextInput
                        style={styles.input}                        
                        placeholder="Qual região deseja encontrar carga?"
                        onChangeText={text => setRegiao(text)}
                        value={regiao}
                    />       

                    <TouchableOpacity 
                        style={styles.buttonLoginCadastrar}
                        onPress={solicitarCarga}
                    >        
                        <Text style={styles.buttonTextLoginCadastrar}>Solicitar Carga</Text>                        
                    </TouchableOpacity>                 
                </ScrollView>
            </Animatable.View>
        </View>
    )
}

