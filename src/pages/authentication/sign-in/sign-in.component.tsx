import './sign-in.style.scss';
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import LabeledInput from "../../../UI/inputs/labeled-input/labeled-input.component";
import Form from "../../../UI/form/form.component";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router";
import PageContainer from "../../../components/page-container/page-container.component";
import { signInUser } from "../../../redux/user/user.slice";
import { parseError } from "../../../utils/server/fetches/serverFetches";
import { useSignInMutation } from "../../../redux/api/auth.api";
import { AppDispatch } from '../../../redux/store';

const defaultSignInData = {
    email: '',
    password: ''
}

const SignIn = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [signInData, setSignInData] = useState(defaultSignInData);
    const {email, password} = signInData;

    const [authFunc, {isLoading}] = useSignInMutation();
    const [authError, setAuthError] = useState('');

    const cirilicRegex = /[^\u0000-\u007f]/;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSignInData({...signInData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password.length < 6) {
            setAuthError('Пароль слишком короткий. Минимальная длина 6 символов');
            return;
        }

        if(cirilicRegex.test(password) || cirilicRegex.test(email)) {
            setAuthError('Используйте латиницу для почтового адреса и пароля.');
            return;
        }

        signInHandler();
    }

    function signInHandler() {
        authFunc(signInData).unwrap()
        .then((data) => {
            dispatch(signInUser(data));
            successAuth();
        })
        .catch((error) => {
            setAuthError(parseError(error));
        });
    }

    function successAuth() {
        clearForm();
        navigate('/');
    }

    function clearForm() {
        setSignInData(defaultSignInData)
    }


    return (
        <PageContainer title='Авторизация'>
            <Form 
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
                                autoComplete='on'
                            />
                            <label className="input_error-label"></label>
                        </div>
                    </Fragment>
                }
                isFetching={isLoading}
                errorStatus={authError}
                btnText='Войти'
                routeLink={{url: '/sign-up', text: 'Зарегистрироваться'}}
            />
        </PageContainer>
    )
};

export default SignIn;