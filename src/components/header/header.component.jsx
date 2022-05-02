import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/golden_harry_magic_movie_potter_snitch_icon_183153.svg';
import { UserContext } from '../../contexts/userContext.context';
import './header.style.scss';

const Header = () => {
    const {user, setUser} = useContext(UserContext);

    const signOut = () => {
        setUser(null);
    }

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
                {
                    user
                    ?<span className='header_link' onClick={signOut}>ВЫЙТИ</span>
                    :<Link className='header_link' to='/authentification'>ВОЙТИ</Link>
                }
                
            </div>
        </header>
    );
}

export default Header;