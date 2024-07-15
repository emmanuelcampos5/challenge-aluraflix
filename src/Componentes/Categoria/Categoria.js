import "./Categoria.css"


const Categoria = (props) =>{
    const { colorPrimario, colorSecundario, titulo, id } = props.categoria
    // const { colaboradores, eliminarColaborador} = props

    return <section className="categoria">
        <h3 style={{background: colorPrimario}}>{props.categoria.titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Categoria