import './main.style.scss';
import { MouseEvent, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../../components/header/header.component";
import { getBurgerMenuState, getTheme } from "../../redux/themes/themes.selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCartDropdownState } from "../../redux/cart/cart.selector";
import { toggleBurgerMenu } from "../../redux/themes/themes.slice";
import { toggleCartDropdown } from "../../redux/cart/cart.slice";
import { useLazyAuthQuery } from "../../redux/api/auth.api";
import { setUser } from '../../redux/user/user.slice';
import { AppDispatch } from '../../redux/store';

const Main = () => {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector(getTheme);
    const isCartDropdownOpen = useSelector(getCartDropdownState);
    const isBurgerMenuOpen = useSelector(getBurgerMenuState);
    const [authorizationFunc] = useLazyAuthQuery();

    useEffect(() => {
        authorizationFunc().unwrap()
        .then((user) => dispatch(setUser(user)))
        .catch((error) => console.error(error));
    }, []);


    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        if(!e.currentTarget.classList[0]?.includes('cart') && isCartDropdownOpen)
            dispatch(toggleCartDropdown(false));
        
        if(!e.currentTarget.classList[0]?.includes('header-links_dropdown') && isBurgerMenuOpen)
            dispatch(toggleBurgerMenu(false));
    }

    return (
        <div className={`main-container main-container_theme_${theme}`} onClick={onClickHandler}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;