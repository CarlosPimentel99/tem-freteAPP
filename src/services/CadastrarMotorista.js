import axios from "axios";

const baseURL = "http://temfretecarga.com/temfreteapi/public/api/v1";

const CadastrarMotorista = async (nomeCompleto, cpf, cell, placa, tipoMotorista, senha) => {

    const url = `${baseURL}/motoristas/adiciona`;

    const cpfLogin = cpf.replace(/[^\d]+/g,'');        

    if(nomeCompleto.length < 3) {
        throw new Error("Nome Completo inválido!");
    }else if (cpfLogin.length < 11) {
        throw new Error("CPF inválido!!!!");
    }else if (cell.length < 14) {
        throw new Error("Telefone inválido!");
    }else if (placa.length < 8) {
        throw new Error("Placa inválida!");
    }else if (tipoMotorista.length < 1) {
        throw new Error("Tipo de Motorista inválido!");
    }else if(senha.length < 4) {
        throw new Error("Informar uma senha maior que 4 caracteres!");
    }        

    const response = await axios.post(url, {
        nome: nomeCompleto,
        telefone: cell,
        cpf: cpfLogin,
        senha: senha,
        placa: placa
    });

    if(response.status === 200) {
        console.log(response);
        if(response.data.status === "sucesso") {             
            return response.data.status;
        }
        else {
            throw new Error("Erro ao cadastrar motorista! Error: " + response.data.status);
        }        
    }else if(response.status === 400) {
        throw new Error("Erro ao cadastrar motorista! 22");
    }    

}

export default CadastrarMotorista;