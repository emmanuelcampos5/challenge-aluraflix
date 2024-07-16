import Banner from '../Componentes/Banner/Banner'
import Categoria from '../Componentes/Categoria/Categoria'


const Home = (props) => {
    console.log(props.colaboradores.filter(colaborador => colaborador.categoria === "FRONT END"))
    return <>
        <Banner></Banner>
        {
            props.categorias.map((categoria) => <Categoria categoria={categoria} key={categoria.titulo}
                colaboradores={props.colaboradores.filter(colaborador => colaborador.categoria === categoria.titulo)}
                // eliminarColaborador={eliminarColaborador}
            />
            )
        }
    </>
}

export default Home