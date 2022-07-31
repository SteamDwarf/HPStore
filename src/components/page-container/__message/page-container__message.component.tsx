import './page-container__message.style.scss';
import { FC } from 'react';
import { parseError } from '../../../utils/server/fetches/serverFetches';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

interface IContainerMessageProps {
    text: string | FetchBaseQueryError | SerializedError;
}

const ContainerMessage:FC<IContainerMessageProps> = ({text}) => {
    return (
        <h3 className={`page-container__message`}>{`Ошибка: ${parseError(text)}`}</h3>
    );
}

export default ContainerMessage;