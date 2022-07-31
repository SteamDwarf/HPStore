import { useSelector, useDispatch } from "react-redux/es/exports";
import { getUser } from "../../../../redux/user/user.selectors";
import { signOut } from "../../../../redux/user/user.slice";
import { Link } from "react-router-dom";
import BurgerBtn from "../../../../UI/buttons/burger-btn/burger-btn.component";
import LinksDropdown from "./-dropdown/header__nav-links-dropdown.component";
import useWindowDimension from "../../../../utils/hooks/useWindowDemension";
import { getBurgerMenuState } from "../../../../redux/themes/themes.selectors";
import { toggleBurgerMenu } from "../../../../redux/themes/themes.slice";
import CartBtn from "../../../btns/cart-btn/cart-btn.component";
import './header__nav-links.style.scss';
import { AppDispatch } from "../../../../redux/store";


const HeaderLinks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector(getUser);
    const {width} = useWindowDimension();
    const isBurgerMenuOpen = useSelector(getBurgerMenuState);

    const toggleBurgerMenuHandler = () => {
        dispatch(toggleBurgerMenu(!isBurgerMenuOpen));
    }
    
    const signOutHandler = () => {
        dispatch(signOut());
    }

    if(width < 500) {
        return (
            <div className='header__nav-links'>
                <BurgerBtn onClick={toggleBurgerMenuHandler}/>
                {isBurgerMenuOpen ? <LinksDropdown/> : null}
            </div>
        );
    }

    return (
        <div className='header__nav-links'>
            <Link className='header__link' to='/categories'>ТОВАРЫ</Link>
            {
                user
                ?<Link className='header__link' to='/sign-in' onClick={signOutHandler}>ВЫЙТИ</Link>
                :<Link className='header__link' to='/sign-in'>ВОЙТИ</Link>
            }
            <CartBtn />
        </div>
    );
}

export default HeaderLinks;