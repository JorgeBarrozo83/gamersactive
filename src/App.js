import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './Componentes/ItemDetailConttainer/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/CheckOut/checkOut';
import { CartProvider } from './CartContext/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
     <NavBar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart />} />
      <Route path= "/checkout" element={ <Checkout />} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
     </Routes>
     </CartProvider>
     </BrowserRouter>
    </div>
  );
}

export default App; 
