import './fetching_status.style.scss';

const FetchingStatus = () => {
    return (
        <div className="fetching-status">
            <img className="fetching-status_logo" src="https://media4.giphy.com/media/ihetIyWToPpY7FWFKc/giphy.gif?cid=a267dfa33x9dvqb0c0pk6zhqtvm6fh7wq4op692rpx4p6n8u&rid=giphy.gif&ct=s&1647820800064" alt="" />
            <label className="fetching-status_message">Подождите...</label>
        </div>
    );
};

export default FetchingStatus;