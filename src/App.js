import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/FormularioVideo/FormularioVideo';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/NuevoVideo' element={<Formulario></Formulario>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
