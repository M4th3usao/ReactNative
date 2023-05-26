import axios from 'axios';

const api = axios.create({
    baseURL: 'http://parallelum.com.br/fipe/api/v1/carros/marcas'
    // baseURL: 'https://viacep.com.br/ws/'
});

export default api;