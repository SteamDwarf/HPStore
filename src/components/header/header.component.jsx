import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/golden_harry_magic_movie_potter_snitch_icon_183153.svg';
import { getCartDropdownState } from '../../redux/cart/cart.selector';
import CartBtn from '../btns/cart-btn/cart-btn.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.style.scss';
import { setUserAction } from '../../redux/user/user.actions';
import { getUser } from '../../redux/user/user.selectors';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const isCartDropdownOpen = useSelector(getCartDropdownState);

    const signOut = () => {
        dispatch(setUserAction(null));
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
            </div>
        </header>
    );
}

export default Header;