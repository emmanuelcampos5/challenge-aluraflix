import Colaborador from "../Colaborador/Colaborador"
import "./Categoria.css"


const Categoria = (props) =>{
    const { colorPrimario, titulo} = props.categoria
    const {colaboradores} = props

    return <section className="categoria">
        <h3 style={{background: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador) => (<Colaborador key={colaborador.id} colorPrimario={colorPrimario} datos = {colaborador} eliminarVideo={props.eliminarVideo}></Colaborador>))
            }
        </div>
    </section>
}

export default Categoria