import { Outlet } from "react-router";
import Header from "../../components/header/header.component";
import './main.style.scss';

const Main = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;