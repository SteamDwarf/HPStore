import './page-container.style.scss';
import ContainerMessage from './__message/page-container__message.component';
import Loader from '../../UI/loader/loader.component';
import { FC, ReactNode } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

interface IPageContainerProps {
    children?: ReactNode;
    title?: string;
    isFetching?: boolean;
    error?: string | FetchBaseQueryError | SerializedError;
    className?: string;
}

const PageContainer:FC<IPageContainerProps> = ({children, title = '',  isFetching = false, error = '', className=''}) => {

    const curContent = () => {
        if(isFetching) return <Loader />;
        if(error) return <ContainerMessage text={error}/>;
        if(children) return children;
    }

    return (
        <div className={`${className} page-container`}>
            <h1 className="page-container__title">{title}</h1>
            {curContent()}
        </div>
    );
};

export default PageContainer;