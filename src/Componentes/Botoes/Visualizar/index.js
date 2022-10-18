import { Text, Image} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { useNavigation} from '@react-navigation/native';

export default function BotaoVisualizar({frete}){
    const navigation = useNavigation();  

return (
        <Button style={styles.buttonCardVisualizar} onPress={() => navigation.navigate('BotaoFlutuante', {frete})}>
            <Image 
            source={require('../../../assets/icons/iconeVisualizar.png')}
            />
            <Text style={styles.textoBotaoVisualizar}>
                Visualizar
            </Text>
        </Button>
    )
}