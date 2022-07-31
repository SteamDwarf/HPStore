import './form.style.scss';
import ErrorMessage from '../messages/error_message/error_message.component';
import FetchingStatus from './__fetching-status/form__fetching-status.component';
import SuccessMessage from '../messages/success-message/success-message.component';
import Button from '../buttons/button/button.component';
import { Link } from 'react-router-dom';
import { FC, FormEvent, ReactNode } from 'react';

interface IFormProps {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
    isFetching: boolean;
    errorStatus?: string;
    successStatus?: string;
    btnText: string;
    routeLink?: {url: string, text: string};
}

const Form:FC<IFormProps> = ({onSubmit, children, isFetching, errorStatus, successStatus, btnText, routeLink}) => {
    const curContent = () => {
        if (isFetching) return <FetchingStatus />
        if (errorStatus) return <ErrorMessage text={errorStatus} size='medium'/>
        if (successStatus) return <SuccessMessage text={successStatus}/>
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form__container">
                {children}
                {curContent()}
                <Button className="form__submit-btn" type='submit'>{btnText}</Button>
                {routeLink ? <Link className='form__route-link' to={routeLink.url}>{routeLink.text}</Link>: null} 
            </div>
        </form>
    );
};

export default Form;