import { Text, Image} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { Share } from 'react-native';


export default function BotaoCompartilhar({frete}){

    const onShare = async () => {
        try {
          const mensagem = 'Ola! da uma conferida nesse Frete: ' + frete.titulo + '\n' + 'Tipo de caminhão: ' + frete.tp_caminhao + '\n' + 'Local de coleta: ' + frete.local_coleta + ' \n' + 'Local de entrega: ' + frete.local_entrega + '\n' + 'Não tem o app? Baixe e aproveite: https://play.google.com/store/apps/details?id=com.temfretecarga';  
    
          const result = await Share.share({
            message: mensagem
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

return (
        <Button style={styles.buttonCardCompartilhar} onPress={onShare}>
            <Image 
            source={require('../../../assets/icons/iconeVisualizar.png')}
            />
            <Text style={styles.textoBotaoCompartilhar}>
                Compartilhar
            </Text>
        </Button>
    )
}