import { Linking } from 'react-native';

const urlBase = 'https://api.whatsapp.com/send?phone=';
const phone = '5517997930265';

const enviarMensagemWhatsApp = (frete) =>{
    const mensagem = 'Olá, Tenho interesse em agendar a carga: ' + frete.titulo + ' de ' + frete.local_coleta + ' para ' + frete.local_entrega + '.';
    const url = `${urlBase}${phone}&text=${mensagem}`;
    Linking.openURL(url);
}

export default enviarMensagemWhatsApp;