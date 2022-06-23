import { Fragment, useState, useEffect } from "react";
import { signUp } from "../../../redux/user/user.actions";
import Form from "../form/form.component";
import LabeledInput from "../../inputs/labeled_input/labeled_input.component";
import './sign_up_form.style.scss';
import { useDispatch, useSelector } from "react-redux";
import { signUpErrorAction } from "../../../redux/user/user.actions";
import { useNavigate } from "react-router";
import { getSignUpError, getSignUpProcessing } from "../../../redux/user/user.selectors";
import { clearForms } from "../../../redux/user/user.actions";

const defaultSignUpData = {
    email: '',
    password: '',
    repeatedPassword: ''
}

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState(defaultSignUpData);
    const {email, password, repeatedPassword} = signUpData;

    const signUpProcessing = useSelector(getSignUpProcessing);
    const signUpError = useSelector(getSignUpError);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cirilicRegex = /[^\u0000-\u007f]/;

    const onChangeHandler = (event) => {
        setSignUpData({...signUpData, [event.target.name]: event.target.value})
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if(password !== repeatedPassword){
            dispatch(signUpErrorAction('Пароли не совпадают'));
            return;
        }

        if(password.length < 6) {
            dispatch(signUpErrorAction('Пароль слишком короткий. Минимальная длина 6 символов'));
            return;
        }

        if(cirilicRegex.test(password) || cirilicRegex.test(email)) {
            dispatch(signUpErrorAction('Используйте латиницу для почтового адреса и пароля.'));
            return;
        }

        dispatch(signUp(email, password, successFunction));
    }

    function successFunction() {
        clearForm();
        navigate(-1)
    }

    function clearForm() {
        setSignUpData(defaultSignUpData)
    }

    useEffect(() => dispatch(clearForms()),[]);    

    return (
        <div className="sign-up-block">
            <Form 
                title='Регистрация'
                onSubmit={onSubmit}
                children={
                    <Fragment>
                        <div className="input-block">
                            <LabeledInput 
                                labelText='Электронная почта'
                                type='email'
                                value={email}
                                name='email'
                                onChange={onChangeHandler} 
                                isRequired={true}
                            />
                            <label className="input_error-label"></label>
                        </div>
                        <div className="input-block">
                            <LabeledInput 
                                labelText='Пароль'
                                type='password'
                                value={password}
                                name='password'
                                onChange={onChangeHandler} 
                                isRequired={true}
                            />
                            <label className="input_error-label"></label>
                        </div>
                        <div className="input-block">
                            <LabeledInput 
                                labelText='Подтвердите пароль'
                                type='password'
                                value={repeatedPassword} 
                                name='repeatedPassword'
                                onChange={onChangeHandler}
                                isRequired={true}
                            />
                            <label className="input_error-label"></label>
                        </div>
                    </Fragment>
                }
                isFetching={signUpProcessing}
                errorStatus={signUpError}
                btnText='Зарегистрироваться'
            />
        </div>
    );
};

export default SignUpForm;