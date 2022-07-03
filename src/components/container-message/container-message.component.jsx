import './container-message.style.scss';

const ContainerMessage = ({text, type}) => {
    return (
        <h3 className={`container_message-block ${type}`}>{`Ошибка: ${text.status}`}</h3>
    );
}

export default ContainerMessage;