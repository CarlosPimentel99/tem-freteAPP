import validarToken from '../../services/ValidarToken';

export async function validaExistenciaToken() {
  try {
    const token = await validarToken();
    if (token) {
      return true;
    }
    return false;
  } catch (erro) {
    console.log(erro);
    return false;
  }
}
