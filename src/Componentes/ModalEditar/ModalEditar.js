import { useState } from 'react'
import './ModalEditar.css'
import Input from '../Input/Input'
import ListaOpciones from '../ListaOpciones/ListaOpciones'

const ModalEditar = (props) => {
    const [Titulo, actualizarTitulo] = useState("")
    const [Categoria, actualizarCategoria] = useState("FRONT END")
    const [Imagen, actualizarImagen] = useState("")
    const [Video, actualizarVideo] = useState("")
    const [Descripcion, actualizarDescripcion] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosEnviar = {
            titulo: Titulo,
            categoria: Categoria,
            imagen: Imagen,
            video: Video,
            Descripcion: Descripcion
        }
        props.actualizarVideo(datosEnviar)
    }

    return (
        <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="staticBackdropLabel">{props.video.titulo}</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Input placeholder={"Ingrese el Titulo"} required={true} titulo={"Titulo"} valor={Titulo} actualizarValor={actualizarTitulo}></Input>
                        <ListaOpciones categorias={props.categorias} actualizarCategoria={actualizarCategoria}></ListaOpciones>
                        <Input placeholder={"El enlace es obligatorio"} required={true} titulo={"Imagen"} valor={Imagen} actualizarValor={actualizarImagen}></Input>
                        <Input placeholder={"Ingrese el enlace del video"} required={true} titulo={"Video"} valor={Video} actualizarValor={actualizarVideo}></Input>
                        <Input placeholder={"Ingrese el Nombre"} required={true} titulo={"Descripcion"} valor={Descripcion} actualizarValor={actualizarDescripcion}></Input>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditar;
