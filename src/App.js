import { Route, Routes } from "react-router";
import Main from "./pages/main/main.page";
import Home from "./pages/home/home.page";
import Authentification from './pages/authentication/authentification.page';
import Categories from "./pages/categories/categories.page";

function App() {
  return (
    <Routes className="app">
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}/>
        <Route path="/authentification" element={<Authentification />}/>
        <Route path="/categories" element={<Categories />}/>
      </Route>
    </Routes>
  );
}

export default App;
