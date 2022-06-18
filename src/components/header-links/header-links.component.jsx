import './header-links.style.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/user/user.selectors';
import { getCartDropdownState } from '../../redux/cart/cart.selector';
import { signOutAction } from '../../redux/user/user.actions';
import CartBtn from '../btns/cart-btn/cart-btn.component';
import CartDropdown from '../dropdowns/cart-dropdown/cart-dropdown.component';
import ThemeButton from '../btns/theme-button/theme-button.component';

const HeaderLinks = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const isCartDropdownOpen = useSelector(getCartDropdownState);

    const signOut = () => {
        dispatch(signOutAction());
    }

    return (
        <div className='header-links_container'>
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
            <ThemeButton />
        </div>
    );
}

export default HeaderLinks;