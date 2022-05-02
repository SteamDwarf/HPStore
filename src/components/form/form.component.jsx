import LabeledInput from "../labeled_input/labeled_input.component";
import FormBtn from "../form_btn/form_btn.component";
import './form.style.scss';

const Form = ({title, onSubmit, children, isFetching, errorStatus, btnText}) => {
    
    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form_title">{title}</h1>
            <div className="form_data">
                {children}
                {isFetching 
                    ? <label className="fetching-status-label">Подождите...</label>
                    : null
                }
                <label className="error-label">{errorStatus}</label>
                <FormBtn text={btnText}/>
            </div>
        </form>
    );
};

export default Form;