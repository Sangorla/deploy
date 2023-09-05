
/* 3. importamos la configuración de las rutas en App.js*/
import { Routes, Route } from 'react-router-dom'

import Footer from './Componentes/Footer'
import Navegador from './Componentes/Navegador/Navegador';
import OtraNav from './Componentes/OtraNav';
import Main from './Componentes/Main';
import Principal from './Componentes/Principal';
import Home from './Componentes/Home';
import Error from './Componentes/Error';
import Productos from './Componentes/Productos';
import Api from './Componentes/Api';
import ApiDos from './Componentes/ApiDos';



function App() {
  return ( 
    <>

      <Navegador />

      <OtraNav />

      {/* configuramos las rutas */}
      <Routes>
        <Route index element={ <Home /> }></Route>
        <Route path='/home' element={ <Home /> }></Route>
        <Route path='/principal' element={ <Principal /> }></Route>
        <Route path='/main' element={ <Main /> }></Route>
        <Route path='/productos' element={ <Productos /> }></Route>
        <Route path='/api' element={ <Api /> }></Route>
        <Route path='/apidos' element={ <ApiDos /> }></Route>
        <Route path='*' element={ <Error /> }></Route>
      </Routes>


      <Footer />

    </>


  );
}

export default App;
