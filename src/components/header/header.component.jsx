import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/golden_harry_magic_movie_potter_snitch_icon_183153.svg';
import './header.style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className='header_logo-container'>
                <Link  to='/'>
                    <Logo className='header_logo' />
                </Link>
            </div>
            {/* <h1 className='header_title'>Harry Potter Store</h1> */}
            <div className='header_links-container'>
                <Link className='header_link' to='/categories'>ТОВАРЫ</Link>
                <Link className='header_link' to='/authentification'>ВОЙТИ</Link>
            </div>
        </header>
    );
}

export default Header;