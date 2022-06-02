import { MESSAGE_TYPES } from '../../utils/types';
import ContainerMessage from '../container-message/container-message.component';
import Loader from '../loader/loader.component';
import './page-container.style.scss';

const PageContainer = ({title, children, isFetching, error}) => {
    return (
        <div className="page-container">
            <h1 className="page-container_title">{title}</h1>
            {isFetching ? <Loader /> : null}
            {error ? <ContainerMessage text={error} type={MESSAGE_TYPES.ERROR_MESSAGE}/> : null}
            {children ? children : null}
        </div>
    );
};

export default PageContainer;