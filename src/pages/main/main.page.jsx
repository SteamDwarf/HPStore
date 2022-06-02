import { Outlet } from "react-router";
import Header from "../../components/header/header.component";
import { getTheme } from "../../redux/themes/themes.selectors";
import { useSelector } from "react-redux/es/exports";
import './main.style.scss';

const Main = () => {
    const theme = useSelector(getTheme);

    return (
        <div className={`container ${theme}`}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;