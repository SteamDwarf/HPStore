import { Route, Routes } from "react-router";
import Main from "./pages/main/main.page";
import Home from "./pages/home/home.page";
import Authentification from './pages/authentication/authentification.page';
import Category from "./pages/category/category.page";
import Products from "./pages/products/products.page";
import Purchases from "./pages/purchases/purchases.page";
import ProductDetails from "./pages/product-details/product-details.page";

//TODO Настроить вложеннеы роуты

function App() {
  return (
    <Routes className="app">
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}/>
        <Route path="/authentification" element={<Authentification />}/>
        <Route path="/categories" element={<Products />}/>
        <Route path="/categories/:categoty_name" element={<Category />}/>
        <Route path="/categories/:categoty_name/:product_name" element={<ProductDetails />}/>
        <Route path="/purchases" element={<Purchases />}/>
      </Route>
    </Routes>
  );
}

export default App;
