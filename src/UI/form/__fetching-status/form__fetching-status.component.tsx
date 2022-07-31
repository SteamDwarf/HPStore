import Loader from '../../loader/loader.component';
import './form__fetching-status.style.scss';

const FetchingStatus = () => {
    return (
        <div className="fetching-status">
            <Loader />
            <label className="fetching-status__message">Подождите...</label>
        </div>
    );
};

export default FetchingStatus;