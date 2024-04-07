import "./App.css";
import Carousel from "./Carousel";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Product } from "./Product";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Header/>
     
      <Routes>
        <Route path="/" element={<Carousel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes> 
    </>
  );
}

export default App;
