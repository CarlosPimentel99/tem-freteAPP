import axios from "axios";

const baseURL = "http://temfretecarga.com/temfreteapi/public/api/v1";

const EnviarParaSuporte = async (nomeCompleto, cell, mensagemSuporte) => {    
    const url = `${baseURL}/email/suporte`;    

    if(nomeCompleto.length < 10) {
        throw new Error("Nome Completo inválido!");
    }else if (cell.length < 14) {
        throw new Error("Telefone inválido!");
    }else if (mensagemSuporte.length < 10){
        throw new Error("Por favor, descreva melhor o seu problema!");  
    }

    const response = await axios.post(url, {
        nome: nomeCompleto,
        telefone: cell,
        mensagem: mensagemSuporte
    });    
    
    if(response.status === 200) {                          
        if(response.data.status === "sucesso") {
            return response.data.status;    
        }
        else {
            throw new Error("Problemas falar com suporte!");
        }
    } else {        
        throw new Error("Problemas falar com suporte!");
    }
}

export default EnviarParaSuporte;