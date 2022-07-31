import { Route, Routes } from "react-router";
import Main from "./pages/main/main.page";
import Home from "./pages/home/home.page";
import Category from "./pages/category/category.page";
import Products from "./pages/products/products.page";
import Purchases from "./pages/purchases/purchases.page";
import ProductDetails from "./pages/product-details/product-details.page";
import NotFound from "./pages/not-found/not-found.page";
import SignIn from "./pages/authentication/sign-in/sign-in.component";
import SignUp from "./pages/authentication/sign-up/sign-up.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}/>
        <Route path="sign-in" element={<SignIn />}/>
        <Route path="sign-up" element={<SignUp />}/>
        <Route path="categories" element={<Products />}/>
        <Route path="categories/:category_name" element={<Category />}/>
        <Route path="categories/:category_name/:product_name" element={<ProductDetails />}/>
        <Route path="purchases" element={<Purchases />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;
