import { Fragment, useState } from "react";
import LabeledInput from "../../inputs/labeled_input/labeled_input.component";
import Form from "../form/form.component";
import './sign_in_form.style.scss';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router";
import { getSignInError } from "../../../redux/user/user.selectors";
import { useEffect } from "react";
import { signIn} from "../../../redux/user/user.async";
import { setSignInError } from "../../../redux/user/user.slice";
import { useLoginMutation } from "../../../redux/api/auth.api";

const defaultSignInData = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [signInData, setSignInData] = useState(defaultSignInData);
    const {email, password} = signInData;

    const [authFunc, {isLoading}] = useLoginMutation();

    const userError = useSelector(getSignInError);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cirilicRegex = /[^\u0000-\u007f]/;

    const onChangeHandler = (event) => {
        setSignInData({...signInData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(password.length < 6) {
            dispatch(setSignInError('Пароль слишком короткий. Минимальная длина 6 символов'));
            return;
        }

        if(cirilicRegex.test(password) || cirilicRegex.test(email)) {
            dispatch(setSignInError('Используйте латиницу для почтового адреса и пароля.'));
            return;
        }

        signIn(signInData, authFunc, dispatch, successAuth);
    }

    function successAuth() {
        clearForm();
        navigate(-1);
    }

    function clearForm() {
        setSignInData(defaultSignInData)
    }

    useEffect(() => {dispatch(setSignInError(''))},[]);

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
                isFetching={isLoading}
                errorStatus={userError}
                btnText='Войти'
                routeLink={{url: '/authentification/sign-up', text: 'Зарегистрироваться'}}
            />
        </div>
    )
};

export default SignInForm;