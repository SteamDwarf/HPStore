import './error_message.style.scss';

const ErrorMessage = ({text}) => {
    return (
        <label className="error-message">{text}</label>
    );
};

export default ErrorMessage;
