import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/golden_harry_magic_movie_potter_snitch_icon_183153.svg';
import { getCartDropdownState } from '../../redux/cart/cart.selector';
import CartBtn from '../btns/cart-btn/cart-btn.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.style.scss';
import { signOutAction } from '../../redux/user/user.actions';
import { getUser } from '../../redux/user/user.selectors';
import { getTheme } from '../../redux/themes/themes.selectors';
import { setThemeAction } from '../../redux/themes/themes.actions';
import Button from '../btns/button/button.component';
import ThemeButton from '../btns/theme-button/theme-button.component';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const isCartDropdownOpen = useSelector(getCartDropdownState);
    const theme = useSelector(getTheme);

    const signOut = () => {
        dispatch(signOutAction());
    }

    const changeTheme = () => {
        theme === 'light' ? dispatch(setThemeAction('dark')) : dispatch(setThemeAction('light'))
    }

    return (
        <header className="header">
            <div className='header_logo-container'>
                <Link  to='/'>
                    <Logo className='header_logo' />
                </Link>
            </div>
            <div className='header_links-container'>
                <Link className='header_link' to='/categories'>ТОВАРЫ</Link>
                {
                    user
                    ?<span className='header_link' onClick={signOut}>ВЫЙТИ</span>
                    :<Link className='header_link' to='/authentification'>ВОЙТИ</Link>
                }
                <CartBtn />
                {
                    isCartDropdownOpen
                    ? <CartDropdown />
                    : null
                }
                <ThemeButton onClick={changeTheme} />
            </div>
        </header>
    );
}

export default Header;