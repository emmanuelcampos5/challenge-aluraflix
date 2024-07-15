import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/Video"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}