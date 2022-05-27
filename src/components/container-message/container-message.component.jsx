import './container-message.style.scss';

const ContainerMessage = ({text, type}) => {
    return (
        <h2 className={`container_message-block ${type}`}>{text}</h2>
    );
}

export default ContainerMessage;