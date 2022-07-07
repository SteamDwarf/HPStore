import './form.style.scss';
import ErrorMessage from '../../error_message/error_message.component';
import FetchingStatus from '../fetching_status/fetching_status.component';
import SuccessMessage from '../../success-message/success-message.component';
import Button from '../../btns/button/button.component';
import { Link } from 'react-router-dom';

const Form = ({title, onSubmit, children, isFetching, errorStatus, successStatus, btnText, routeLink}) => {
    const curContent = () => {
        if (isFetching) return <FetchingStatus />
        if (errorStatus) return <ErrorMessage text={errorStatus} size='medium'/>
        if (successStatus) return <SuccessMessage text={successStatus}/>

    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form_title">{title}</h1>
            <div className="form_data">
                {children}
                {curContent()}
                <Button type='submit'>{btnText}</Button>
                {routeLink ? <Link className='form_route-link' to={routeLink.url}>{routeLink.text}</Link>: null} 
            </div>
        </form>
    );
};

export default Form;