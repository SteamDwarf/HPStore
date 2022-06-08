import Loader from '../../loader/loader.component';
import './fetching_status.style.scss';

const FetchingStatus = () => {
    return (
        <div className="fetching-status">
            <Loader />
            <label className="fetching-status_message">Подождите...</label>
        </div>
    );
};

export default FetchingStatus;