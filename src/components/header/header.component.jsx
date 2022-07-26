import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/golden_harry_magic_movie_potter_snitch_icon_183153.svg';
import './header.style.scss';
import HeaderNav from './__nav/header__nav.component';

const Header = () => {

    return (
        <header className="header">
            <div className='header__logo-container'>
                <Link  to='/'>
                    <Logo className='header__logo' />
                </Link>
            </div>
            <div>
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;