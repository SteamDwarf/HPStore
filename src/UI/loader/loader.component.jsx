import loader from '../../assets/loading_logo/giphy.gif';
import './loader.style.scss';

const Loader = () => {
    return (
        <img className='loader-img' src={loader} alt="loading" />
    );
}

export default Loader;