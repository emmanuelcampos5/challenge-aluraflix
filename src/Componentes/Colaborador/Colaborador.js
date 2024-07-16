import './Colaborador.css'

const Colaborador = (props) => {
    return <div className="card" style={{width: "18rem"}}>
        <div className='imagen'>
            <img src={props.datos.imagen} className="card-img-top" alt="imagenColaborador"></img>
        </div>
        <div className="card-body">
            <button className="btn btn-primary" onClick={() => console.log("asd")}>Eliminar</button>
            <button className="btn btn-primary">Editar</button>
        </div>
    </div>
}

export default Colaborador