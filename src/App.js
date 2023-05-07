import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Image from "./Componentes/CartWidget/assets/logogamer.png.png";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './Componentes/ItemDetailConttainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App; 
