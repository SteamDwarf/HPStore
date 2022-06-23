import { Fragment, useState } from "react";
import LabeledInput from "../../inputs/labeled_input/labeled_input.component";
import { clearForms, signIn, signInErrorAction } from "../../../redux/user/user.actions";
import Form from "../form/form.component";
import './sign_in_form.style.scss';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router";
import { getSignInError, getSignInProcessing } from "../../../redux/user/user.selectors";
import { useEffect } from "react";

const defaultSignInData = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [signInData, setSignInData] = useState(defaultSignInData);
    const {email, password} = signInData;

    const signInError = useSelector(getSignInError);
    const signInProcessing = useSelector(getSignInProcessing);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cirilicRegex = /[^\u0000-\u007f]/;

    const onChangeHandler = (event) => {
        setSignInData({...signInData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(password.length < 6) {
            dispatch(signInErrorAction('Пароль слишком короткий. Минимальная длина 6 символов'));
            return;
        }

        if(cirilicRegex.test(password) || cirilicRegex.test(email)) {
            dispatch(signInErrorAction('Используйте латиницу для почтового адреса и пароля.'));
            return;
        }

        dispatch(signIn(email, password, successAuth));
    }

    function successAuth() {
        clearForm();
        navigate(-1);
    }

    function clearForm() {
        setSignInData(defaultSignInData)
    }

    useEffect(() => dispatch(clearForms()),[]);

    return (
        <div className="sign-in-block">
            <Form 
                title='Авторизация'
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
                    </Fragment>
                }
                isFetching={signInProcessing}
                errorStatus={signInError}
                btnText='Войти'
            />
        </div>
    )
};

export default SignInForm;