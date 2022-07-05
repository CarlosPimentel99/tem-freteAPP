import axios from "axios";

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
        if(response.data.status === "ok") {
            return response.data.token;            
        }
        else {
            throw new Error("CPF ou Senha inválidos!");
        }
    } else {        
        throw new Error("Erro ao efetuar login!");
    }
}

export default efetuarLogin;