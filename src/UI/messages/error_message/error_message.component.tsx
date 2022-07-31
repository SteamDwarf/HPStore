import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';
import { parseError } from '../../../utils/server/fetches/serverFetches';
import './error_message.style.scss';

interface IErrorMessage {
    text?: string | FetchBaseQueryError | SerializedError;
    size: 'small' | 'medium' | 'large';
}

const ErrorMessage:FC<IErrorMessage> = ({text = '', size}) => {
    return (
        <label className={`error-message ${size}`}>{`Ошибка: ${parseError(text)}`}</label>
    );
};

export default ErrorMessage;
