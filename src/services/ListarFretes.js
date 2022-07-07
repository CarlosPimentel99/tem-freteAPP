import axios from "axios";
const url = "https://temfretecarga.com/temfreteapi/public/api/v1/fretes/lista";

const listarFretes = async () => {

    const response = await axios.get(url);
    
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error("Erro ao listar fretes!");
    }
}

export default listarFretes;
