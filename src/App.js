import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/FormularioVideo/FormularioVideo';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [categorias, actualizarCategorias] = useState([
    {
      id: "1",
      titulo: "FRONT END",
      colorPrimario: "#6BD1FF",
    },
    {
      id: "2",
      titulo: "BACK END",
      colorPrimario: "#00C86F",
    },
    {
      id: "3",
      titulo: "INNOVACION Y GESTION",
      colorPrimario: "#FFBA05",
    }
  ])

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home categorias = {categorias}></Home>}></Route>
        <Route path='/NuevoVideo' element={<Formulario categorias = {categorias}></Formulario>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
