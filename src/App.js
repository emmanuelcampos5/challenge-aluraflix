import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/FormularioVideo/FormularioVideo';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [categorias, actualizarCategorias] = useState([
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

  const [colaboradores, actualizarColaboradores] = useState([

  ])

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home categorias = {categorias} colaboradores = {colaboradores}></Home>}></Route>
        <Route path='/NuevoVideo' element={<Formulario categorias = {categorias} registrarColaborador = {registrarColaborador}></Formulario>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
