import './sign-up.style.scss';
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import Form from "../../../UI/form/form.component";
import LabeledInput from "../../../UI/inputs/labeled-input/labeled-input.component";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSignInMutation, useSignUpMutation } from "../../../redux/api/auth.api";
import PageContainer from "../../../components/page-container/page-container.component";
import { signInUser } from "../../../redux/user/user.slice";
import { AppDispatch } from '../../../redux/store';


const defaultSignUpData = {
    email: '',
    password: '',
    repeatedPassword: '',
    firstName: 'user', 
    lastName: 'user'
}

const SignUp = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState(defaultSignUpData);
    const {email, password, repeatedPassword} = signUpData;

    const [signUpFunc, {isLoading: isSignUp}] = useSignUpMutation();
    const [signInFunc, {isLoading: isSignIn}] = useSignInMutation();
    const [authError, setAuthError] = useState('');

    const cirilicRegex = /[^\u0000-\u007f]/;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpData({...signUpData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password !== repeatedPassword){
            setAuthError('Пароли не совпадают');
            return;
        }

        if(password.length < 6) {
            setAuthError('Пароль слишком короткий. Минимальная длина 6 символов');
            return;
        }

        if(cirilicRegex.test(password) || cirilicRegex.test(email)) {
            setAuthError('Используйте латиницу для почтового адреса и пароля.');
            return;
        }

        signUpHandler();
    }

    function signUpHandler() {
        signUpFunc(signUpData).unwrap()
        .then(() => {
            return signInFunc(signUpData).unwrap()
        })
        .then((data) => {
            dispatch(signInUser(data));
            successAuth();
        })
        .catch((error) => {
            setAuthError(error);
        });
    }

    function successAuth() {
        clearForm();
        navigate(-2)
    }

    function clearForm() {
        setSignUpData(defaultSignUpData)
    }


    return (
        <PageContainer title='Регистрация'>
            <Form 
                onSubmit={onSubmit}
                children={
                    <Fragment>
                        <LabeledInput 
                            labelText='Электронная почта'
                            type='email'
                            value={email}
                            name='email'
                            onChange={onChangeHandler} 
                            isRequired={true}
                        />
                        <LabeledInput 
                            labelText='Пароль'
                            type='password'
                            value={password}
                            name='password'
                            onChange={onChangeHandler} 
                            isRequired={true}
                            autoComplete='on'
                        />
                        <LabeledInput 
                            labelText='Подтвердите пароль'
                            type='password'
                            value={repeatedPassword} 
                            name='repeatedPassword'
                            onChange={onChangeHandler}
                            isRequired={true}
                        />
                    </Fragment>
                }
                isFetching={isSignIn || isSignUp}
                errorStatus={authError}
                btnText='Зарегистрироваться'
                routeLink={{url: '/sign-in', text: 'Уже есть аккаунт?'}}
            />
        </PageContainer>
    );
};

export default SignUp;