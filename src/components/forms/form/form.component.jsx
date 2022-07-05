import './form.style.scss';
import ErrorMessage from '../../error_message/error_message.component';
import FetchingStatus from '../fetching_status/fetching_status.component';
import SuccessMessage from '../../success-message/success-message.component';
import Button from '../../btns/button/button.component';

const Form = ({title, onSubmit, children, isFetching, errorStatus, successStatus, btnText}) => {
    
    const curContent = () => {
        if (errorStatus) return <ErrorMessage text={errorStatus} size='medium'/>
        if (isFetching) return <FetchingStatus />
        if (successStatus) return <SuccessMessage text={successStatus}/>

    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form_title">{title}</h1>
            <div className="form_data">
                {children}
                {curContent()}
                <Button type='submit'>{btnText}</Button>
            </div>
        </form>
    );
};

export default Form;