import { parseError } from '../../utils/server/fetches/serverFetches';
import './container-message.style.scss';

const ContainerMessage = ({text, type}) => {
    return (
        <h3 className={`container_message-block ${type}`}>{`Ошибка: ${parseError(text)}`}</h3>
    );
}

export default ContainerMessage;