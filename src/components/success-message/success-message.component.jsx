import './success-message.style.scss';

const SuccessMessage = ({text}) => {
    return (
        <label className="success-message">{text}</label>
    );
};

export default SuccessMessage;