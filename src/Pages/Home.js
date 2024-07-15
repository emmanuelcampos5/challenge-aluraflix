import Banner from '../Componentes/Banner/Banner'
import Categoria from '../Componentes/Categoria/Categoria'


const Home = (props) => {
    return <>
        <Banner></Banner>
        {
            props.categorias.map((categoria) => <Categoria categoria={categoria} key={categoria.titulo}
                // colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                // eliminarColaborador={eliminarColaborador}
            />
            )
        }
    </>
}

export default Home