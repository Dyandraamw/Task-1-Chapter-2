import { Route,Routes } from "react-router-dom";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProductDetail from "./pages/ProductDetail";
import ModalProduct from "./pages/ModalProduct";
import ModalUser from "./pages/ModalUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetail />}/>
      <Route path="/products/delete/:id" element={<ModalProduct />}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/delete/:id" element={<ModalUser/>}/>

    </Routes>
    
  );
}

export default App;
