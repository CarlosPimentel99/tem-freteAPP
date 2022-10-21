import { Linking } from 'react-native';

const urlBase = 'https://api.whatsapp.com/send?phone=';
const phone = '5517997930265';

const SolicitarCargaServico = (informacoes) =>{
    const mensagem = 'Olá, me chamo: ' + informacoes.nome + ' meu veículo é do tipo ' + informacoes.tipoCaminhao + ' e possui o tipo de bau ' + informacoes.tipoBau  + ', gostária de solicitar uma carga para a região de ' + informacoes.regiao;
    const url = `${urlBase}${phone}&text=${mensagem}`;
    Linking.openURL(url);
}

export default SolicitarCargaServico;