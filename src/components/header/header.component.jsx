import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/golden_harry_magic_movie_potter_snitch_icon_183153.svg';
import './header.style.scss';
import { getBurgerMenuState} from '../../redux/themes/themes.selectors';
import {toggleBurgerMenuAction } from '../../redux/themes/themes.actions';
import useWindowDimension from '../../utils/hooks/useWindowDemension';
import BurgerBtn from '../btns/burger-btn/burger-btn.component';
import { Fragment } from 'react';
import ThemeButton from '../btns/theme-button/theme-button.component';
import HeaderLinks from '../header-links/header-links.component';
import LinksDropdown from '../dropdowns/links-dropdown/links-dropdown.component';

const Header = () => {
    const dispatch = useDispatch();
    const {width} = useWindowDimension();
    const isBurgerMenuOpen = useSelector(getBurgerMenuState);

    const toggleBurgerMenu = () => {
        dispatch(toggleBurgerMenuAction(!isBurgerMenuOpen));
    }

    return (
        <header className="header">
            <div className='header_logo-container'>
                <Link  to='/'>
                    <Logo className='header_logo' />
                </Link>
            </div>
            <div>
                {
                    width > 500
                    ? <HeaderLinks />
                    : <div className='header_links-container'>
                            <BurgerBtn onClick={toggleBurgerMenu} />
                            <ThemeButton />
                            {isBurgerMenuOpen ? <LinksDropdown/> : null}
                        </div>
                }
            </div>
        </header>
    );
}

export default Header;