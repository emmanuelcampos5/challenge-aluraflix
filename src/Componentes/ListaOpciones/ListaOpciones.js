import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categorias</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
            {props.categorias.map((categoria, index) => <option key={index} value={categoria.titulo}>{categoria.titulo}</option>)}
        </select>
    </div>
}

export default ListaOpciones