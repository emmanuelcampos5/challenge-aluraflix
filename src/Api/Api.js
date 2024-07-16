import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data);
}

export const post = async (url, datosEnviar) => {
    const respuesta = await api.post(url, datosEnviar);
    console.log(respuesta.data);
}
