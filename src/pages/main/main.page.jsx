import { Outlet } from "react-router";
import Header from "../../components/header/header.component";
import { getTheme } from "../../redux/themes/themes.selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import './main.style.scss';
import { toggleCartDropdownAction } from "../../redux/cart/cart.actions";
import { getCartDropdownState } from "../../redux/cart/cart.selector";

const Main = () => {
    const theme = useSelector(getTheme);
    const isCartDropdownOpen = useSelector(getCartDropdownState);
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        //console.log(e.target.classList[0].includes('cart'))
        if(!e.target.classList[0].includes('cart') && isCartDropdownOpen)
            dispatch(toggleCartDropdownAction(false))
    }

    return (
        <div className={`container ${theme}`} onClick={onClickHandler}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;