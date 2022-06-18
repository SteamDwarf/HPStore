import Dropdown from "../dropdown/dropdown.component";
import './links-dropdown.style.scss';
import { Link } from "react-router-dom";
import CartBtn from "../../btns/cart-btn/cart-btn.component";
import ThemeButton from "../../btns/theme-button/theme-button.component";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/user/user.selectors";
import { signOutAction } from "../../../redux/user/user.actions";

const LinksDropdown = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const signOut = () => {
        dispatch(signOutAction());
    }

    return (
        <Dropdown>
            <div className='header-links_dropdown-container'>
                <Link className='header-links_dropdown-link' to='/categories'>ТОВАРЫ</Link>
                {
                    user
                    ?<span className='header-links_dropdown-link' onClick={signOut}>ВЫЙТИ</span>
                    :<Link className='header-links_dropdown-link' to='/authentification'>ВОЙТИ</Link>
                }
                <Link className='header-links_dropdown-link' to='/purchases'>КОРЗИНА</Link>
            </div>
        </Dropdown>
    );
}

export default LinksDropdown;