import LabeledInput from "../labeled_input/labeled_input.component";
import FormBtn from "../form_btn/form_btn.component";
import './form.style.scss';
import ErrorMessage from "../error_message/error_message.component";
import FetchingStatus from "../fetching_status/fetching_status.component";

const Form = ({title, onSubmit, children, isFetching, errorStatus, btnText}) => {
    
    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form_title">{title}</h1>
            <div className="form_data">
                {children}
                {
                    isFetching 
                    ? <FetchingStatus />
                    : null
                }
                <ErrorMessage text={errorStatus}/>
                <FormBtn text={btnText}/>
            </div>
        </form>
    );
};

export default Form;