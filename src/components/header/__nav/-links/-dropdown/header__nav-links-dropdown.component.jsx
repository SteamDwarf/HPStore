import Dropdown from "../../../../../UI/dropdown/dropdown.component";
import './header__nav-links-dropdown.style.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../../redux/user/user.selectors";
import { signOut } from "../../../../../redux/user/user.slice";

const LinksDropdown = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const signOutHandler = () => {
        dispatch(signOut());
    }

    return (
        <Dropdown className='header__links-dropdown'>
            <div className='header__links-dropdown-container'>
                <Link className='header__links-dropdown-link' to='/categories'>ТОВАРЫ</Link>
                {
                    user
                    ?<Link className='header__links-dropdown-link' to='/sign-in' onClick={signOutHandler}>ВЫЙТИ</Link>
                    :<Link className='header__links-dropdown-link' to='/sign-in'>ВОЙТИ</Link>
                }
                <Link className='header__links-dropdown-link' to='/purchases'>КОРЗИНА</Link>
            </div>
        </Dropdown>
    );
}

export default LinksDropdown;