import './error_message.style.scss';

const ErrorMessage = ({text, size}) => {
    return (
        <label className={`error-message ${size}`}>{`Ошибка: ${text.status}`}</label>
    );
};

export default ErrorMessage;
