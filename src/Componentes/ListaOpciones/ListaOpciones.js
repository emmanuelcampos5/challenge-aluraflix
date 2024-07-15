import "./ListaOpciones.css"

const categorias = [
    "Front-End",
    "programacion"
]

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categorias</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
            {categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
        </select>
    </div>
}

export default ListaOpciones