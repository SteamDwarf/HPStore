import { parseError } from '../../../utils/server/fetches/serverFetches';
import './page-container__message.style.scss';

const ContainerMessage = ({text, type}) => {
    return (
        <h3 className={`page-container__message ${type}`}>{`Ошибка: ${parseError(text)}`}</h3>
    );
}

export default ContainerMessage;