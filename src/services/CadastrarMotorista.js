import axios from "axios";

const baseURL = "http://temfretecarga.com/temfreteapi/public/api/v1";

const CadastrarMotorista = async (nomeCompleto, cpf, cell, placa, tipoMotoristaSelecionado, senha) => {

    const url = `${baseURL}/motoristas/adiciona`;

    const cpfLogin = cpf.replace(/[^\d]+/g,'');        

    if(nomeCompleto.length < 10) {
        throw new Error("Nome Completo inválido!");
    }else if (cpfLogin.length < 11) {
        throw new Error("CPF inválido!!!!");
    }else if (cell.length < 14) {
        throw new Error("Telefone inválido!");
    }else if (placa.length < 8) {
        throw new Error("Placa inválida!");
    }else if (tipoMotoristaSelecionado.length < 1 || tipoMotoristaSelecionado == "Tipo Motorista") {
        throw new Error("Tipo de Motorista inválido!");
    }else if(senha.length < 4) {
        throw new Error("Informar uma senha maior que 4 caracteres!");
    }            

    const response = await axios.post(url, {
        nome: nomeCompleto,
        telefone: cell,
        cpf: cpfLogin,
        senha: senha,
        placa: placa,
        tipoMotorista: tipoMotoristaSelecionado
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