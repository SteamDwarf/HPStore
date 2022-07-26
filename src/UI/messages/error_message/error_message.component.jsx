import { parseError } from '../../../utils/server/fetches/serverFetches';
import './error_message.style.scss';

const ErrorMessage = ({text, size}) => {
    return (
        <label className={`error-message ${size}`}>{`Ошибка: ${parseError(text)}`}</label>
    );
};

export default ErrorMessage;
