import './App.css';
import  Navegacion  from "./components/navbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Home from './components/home.js';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Contacto from './components/contacto';
import EpList from './components/epList.js';
import Episodio from './components/episodio';
import EpContainer from './components/epContainer';
import { useState, useEffect } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from './services/getFirebase';
import  Cargando from './components/cargando';
import EpContextProvider from './context/EpContext';
import EpListContainer from './components/epListContainer';





function App() {

  const [listado, setListado] = useState([])
  const [loading, setLoading] = useState(false)


  

  //getData()


  return (
    <EpContextProvider>
    <div className="App">
      <BrowserRouter>
        <Navegacion/>
        {loading ? <Cargando/> : 
               <Container fluid className="bg-dark contenedor" >
          <Switch>
            <Route exact path="/" >
                <Home/>
            </Route>
            <Route exact path={"/episodios"}>
                <EpListContainer lista={listado}/>
            </Route>
            <Route exact path={"/episodios/:ep"}>
                <EpContainer lista={listado}/>
            </Route>
            <Route exact path={"/contacto"}>
                <Contacto/>
            </Route>
          </Switch>
        </Container>    
            } 
        
      </BrowserRouter>
    </div>
    </EpContextProvider>
  );
}

export default App;
