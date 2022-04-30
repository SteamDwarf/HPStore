import { Route, Routes } from "react-router";
import Main from "./pages/main/main.page";
import Home from "./pages/home/home.page";
import Authentification from './pages/authentication/authentification.page';
import Goods from "./pages/goods/goods.page";

function App() {
  return (
    <Routes className="app">
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}/>
        <Route path="/authentification" element={<Authentification />}/>
        <Route path="/goods" element={<Goods />}/>
      </Route>
    </Routes>
  );
}

export default App;
