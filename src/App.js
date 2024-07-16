import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/FormularioVideo/FormularioVideo';
import {buscar, post, borrar, actualizar} from './Api/Api';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [categorias] = useState([
    {
      titulo: "FRONT END",
      colorPrimario: "#6BD1FF",
    },
    {
      titulo: "BACK END",
      colorPrimario: "#00C86F",
    },
    {
      titulo: "INNOVACION Y GESTION",
      colorPrimario: "#FFBA05",
    }
  ])

  const [colaboradores, actualizarColaboradores] = useState([])

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
    post("/Video", colaborador)
  }

  useEffect(() => {
    buscar("/Video", actualizarColaboradores)
  }, [])

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home categorias={categorias} colaboradores={colaboradores}></Home>}></Route>
        <Route path='/NuevoVideo' element={<Formulario categorias={categorias} registrarColaborador={registrarColaborador}></Formulario>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
