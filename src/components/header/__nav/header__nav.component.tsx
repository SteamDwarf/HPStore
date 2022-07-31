import './header__nav.style.scss';
import { useSelector} from 'react-redux';
import { getCartDropdownState } from '../../../redux/cart/cart.selector';
import CartDropdown from '../../dropdowns/cart-dropdown/cart-dropdown.component';
import ThemeButton from '../../btns/theme-button/theme-button.component';
import HeaderLinks from './-links/header__nav-links.component';

const HeaderNav = () => {
    const isCartDropdownOpen = useSelector(getCartDropdownState);
    
    return (
        <nav className='header__nav'>
            <HeaderLinks />
            {
                isCartDropdownOpen
                ? <CartDropdown />
                : null
            }
            <ThemeButton />
        </nav>
    );
}

export default HeaderNav;