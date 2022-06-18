import { Outlet } from "react-router";
import Header from "../../components/header/header.component";
import { getBurgerMenuState, getTheme } from "../../redux/themes/themes.selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import './main.style.scss';
import { toggleCartDropdownAction } from "../../redux/cart/cart.actions";
import { getCartDropdownState } from "../../redux/cart/cart.selector";
import { toggleBurgerMenuAction } from "../../redux/themes/themes.actions";

const Main = () => {
    const theme = useSelector(getTheme);
    const isCartDropdownOpen = useSelector(getCartDropdownState);
    const isBurgerMenuOpen = useSelector(getBurgerMenuState);
    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        if(!e.target.classList[0].includes('cart') && isCartDropdownOpen)
            dispatch(toggleCartDropdownAction(false));
        
        if(!e.target.classList[0].includes('header-links_dropdown') && isBurgerMenuOpen)
            dispatch(toggleBurgerMenuAction(false));
    }

    return (
        <div className={`container ${theme}`} onClick={onClickHandler}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;