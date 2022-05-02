import './form_btn.style.scss';

const FormBtn = ({text}) => {
    return (
        <button className="form-btn" type='submit'>{text}</button>
    );
};

export default FormBtn;