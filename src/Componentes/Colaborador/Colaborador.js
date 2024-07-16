import './Colaborador.css'

const Colaborador = (props) => {
    return <div className="card" style={{width: "18rem", boxShadow: `0px 0px 17px 8px ${props.colorPrimario} inset`}}>
        <div className='imagen' style={{border: `5px solid ${props.colorPrimario}`}}>
            <img src={props.datos.imagen} className="card-img-top" alt="imagenColaborador"></img>
        </div>
        <div className="card-body" style={{border: `5px solid ${props.colorPrimario}`}}>
            <button className="btn btn-primary" onClick={() => console.log("asd")}>Eliminar</button>
            <button className="btn btn-primary">Editar</button>
        </div>
    </div>
}

export default Colaborador