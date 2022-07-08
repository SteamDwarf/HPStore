import { Route, Routes } from "react-router";
import Main from "./pages/main/main.page";
import Home from "./pages/home/home.page";
import Authentification from './pages/authentication/authentification.page';
import Category from "./pages/category/category.page";
import Products from "./pages/products/products.page";
import Purchases from "./pages/purchases/purchases.page";
import ProductDetails from "./pages/product-details/product-details.page";
import SignInForm from "./components/forms/sign_in_form/sign_in_form.component";
import SignUpForm from "./components/forms/sign_up_form/sign_up_form.component";
import NotFound from "./pages/not-found/NotFound.page";

function App() {
  return (
    <Routes className="app">
      <Route path="" element={<Main />}>
        <Route index element={<Home />}/>
        <Route path="authentification" element={<Authentification />}>
          <Route path="sign-in" element={<SignInForm />}/>
          <Route path="sign-up" element={<SignUpForm />}/>
        </Route>
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
