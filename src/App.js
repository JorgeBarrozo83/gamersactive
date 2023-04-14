import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "../Componentes/NavBar/NavBar";
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <ItemListContainer greeting={"Gamers Active"}/>
     <NavBar/>
    </div>
  );
}

export default App; 
