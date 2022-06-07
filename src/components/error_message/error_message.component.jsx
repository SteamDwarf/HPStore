import './error_message.style.scss';

const ErrorMessage = ({text, size}) => {
    return (
        <label className={`error-message ${size}`}>{text}</label>
    );
};

export default ErrorMessage;
