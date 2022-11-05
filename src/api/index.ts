import axios from 'axios'

const api = axios.create( // Só vai funcionar na rede interna do IF
    {
        baseURL:'http://10.10.32.8:8087/'
    }
)

export const listarCategorias = async () => {
    let response = await api.get('categories') // vai concatenar com a baseURL
    return response.data
}

export const listarFilmes = async () => {
    let response = await api.get('movies') // vai concatenar com a baseURL
    return response.data
}