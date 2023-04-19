import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Image from "./Componentes/CartWidget/assets/logogamer.png.png";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Gamers Active"/>
    </div>
  );
}

export default App; 
