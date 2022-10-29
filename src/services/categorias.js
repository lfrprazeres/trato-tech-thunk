import instance from 'common/config/api';

const categoriasService = {
  buscar: async () => {
    const resposta = await instance.get('/categoria');

    return resposta.data;
  }
}

export default categoriasService;