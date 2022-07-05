import axios from "axios";
import { PanResponder } from "react-native";

const baseURL = "http://temfretecarga.com/temfreteapi/public/api/v1";

const efetuarLogin = async (usuarioLogin, senhaLogin) => {    
    const url = `${baseURL}/motoristas/validalogin`;
    
    //remover pontuação do cpf
    const cpfLogin = usuarioLogin.replace(/[^\d]+/g,'');    

    const response = await axios.post(url, {
        cpf: cpfLogin,
        senha: senhaLogin
    });    
    
    if(response.status === 200) {                  
        return response.data.token;   
    } else {        
        return null;
    }
}

export default efetuarLogin;