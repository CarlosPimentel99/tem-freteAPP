import React from 'react';
import { Card } from 'react-native-paper';
import { 
    View,       
    Image,     
    Text,
    TouchableOpacity
  } from 'react-native';
import styles from '../css/Styles';
import * as Animatable from 'react-native-animatable';
import LayoutPadraoVoltar from '../Base/LayoutPadraoVoltar';
import { useNavigation} from '@react-navigation/native';
import TituloCard from './TituloCard';
import TipoCaminhaoCard from './TipoCaminhaoCard';
import LocalEntregaCard from './LocalEntregaCard';
import LocalColetaCard from './LocalColetaCard';
import ValorCarga from './ValorCarga';
import PesoCarga from './PesoCarga';
import enviarMensagemWhatsApp from '../../services/EnviarMensagemWhasapp';

export default function ExibicaoFrete({ route, navegar }) { 
    const navigation = useNavigation();   
    const { frete } = route.params;

    const EnviarMensagem = () => {
        console.log(frete);
        enviarMensagemWhatsApp(frete);
    }

    return (
      <View style={styles.container}>
        <LayoutPadraoVoltar/>
      
        <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>                
          <Image style={styles.containerFundo}
            source={require('../../assets/fundo.png')}
          />          
          <Card style={styles.cardExibicaoFrete}>
            <TituloCard frete={frete}/>          
            <TipoCaminhaoCard frete={frete}/>
            <PesoCarga frete={frete}/>
            <LocalColetaCard frete={frete}/>
            <LocalEntregaCard frete={frete}/>                    
            <ValorCarga frete={frete}/>                       
          </Card>

        <TouchableOpacity 
            style={styles.buttonLoginCadastrar}
            onPress={EnviarMensagem}
        >                        
            <Text style={styles.buttonTextLoginCadastrar}>
                <Image 
                    source={require('../../assets/icons/iconeWhatsApp.png')}
                />       
                Whatsapp
            </Text>
          </TouchableOpacity>
        </Animatable.View>      
      </View>
    );        
}