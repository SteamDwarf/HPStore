import { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../../components/header/header.component";
import { getBurgerMenuState, getTheme } from "../../redux/themes/themes.selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import './main.style.scss';
import { getCartDropdownState } from "../../redux/cart/cart.selector";
import { toggleBurgerMenu } from "../../redux/themes/themes.slice";
import { toggleCartDropdown } from "../../redux/cart/cart.slice";
import { useLazyAuthQuery } from "../../redux/api/auth.api";
import { authorization } from "../../redux/user/user.async";

const Main = () => {
    const theme = useSelector(getTheme);
    const isCartDropdownOpen = useSelector(getCartDropdownState);
    const isBurgerMenuOpen = useSelector(getBurgerMenuState);
    const dispatch = useDispatch();
    const [authorizationFunc] = useLazyAuthQuery();

    useEffect(() => authorization(authorizationFunc, dispatch), []);


    const onClickHandler = (e) => {
        if(!e.target.classList[0]?.includes('cart') && isCartDropdownOpen)
            dispatch(toggleCartDropdown(false));
        
        if(!e.target.classList[0]?.includes('header-links_dropdown') && isBurgerMenuOpen)
            dispatch(toggleBurgerMenu(false));
    }

    return (
        <div className={`container ${theme}`} onClick={onClickHandler}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;