import { MESSAGE_TYPES } from '../../utils/types';
import ContainerMessage from '../container-message/container-message.component';
import Loader from '../loader/loader.component';
import './page-container.style.scss';

const PageContainer = ({title, children, isFetching, error, className}) => {

    const curContent = () => {
        if(isFetching) return <Loader />;
        if(error) return <ContainerMessage text={error} type={MESSAGE_TYPES.ERROR_MESSAGE}/>;
        if(children) return children;
    }

    return (
        <div className={`${className} page-container`}>
            <h1 className="page-container_title">{title}</h1>
            {curContent()}
        </div>
    );
};

export default PageContainer;