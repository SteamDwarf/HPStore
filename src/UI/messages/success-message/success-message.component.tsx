import { FC } from 'react';
import './success-message.style.scss';

interface ISuccessMessage {
    text?: string;
}

const SuccessMessage:FC<ISuccessMessage> = ({text = ''}) => {
    return (
        <label className="success-message">{text}</label>
    );
};

export default SuccessMessage;