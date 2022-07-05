import Dropdown from "../dropdown/dropdown.component";
import './links-dropdown.style.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/user/user.selectors";
import { setUser } from "../../../redux/user/user.slice";
import { toggleBurgerMenu } from "../../../redux/themes/themes.slice";

const LinksDropdown = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const signOut = () => {
        dispatch(setUser(null));
    }
    const clickHandler = (additionalFunc) => {
        additionalFunc();
        dispatch(toggleBurgerMenu(false));
    }

    return (
        <Dropdown>
            <div className='header-links_dropdown-container'>
                <Link className='header-links_dropdown-link' to='/categories' onClick={clickHandler}>ТОВАРЫ</Link>
                {
                    user
                    ?<Link className='header-links_dropdown-link' to='#' onClick={() => clickHandler(signOut)}>ВЫЙТИ</Link>
                    :<Link className='header-links_dropdown-link' to='/authentification' onClick={clickHandler}>ВОЙТИ</Link>
                }
                <Link className='header-links_dropdown-link' to='/purchases' onClick={clickHandler}>КОРЗИНА</Link>
            </div>
        </Dropdown>
    );
}

export default LinksDropdown;