import { Outlet } from "react-router";
import './authentification.style.scss';

const Authentification = () => {
    return (
        <div className="authentification-block">
            <Outlet />
        </div>
    );
}

export default Authentification;