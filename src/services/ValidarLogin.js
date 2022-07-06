import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const validarToken = async () => {    

    const token = await AsyncStorage.getItem('token');
    if(token !== null){
        return true;
    }
    return false;    

}

export default validarToken;