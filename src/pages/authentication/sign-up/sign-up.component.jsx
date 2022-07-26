import { Fragment, useState, useEffect } from "react";
import Form from "../../../UI/form/form.component";
import LabeledInput from "../../../UI/inputs/labeled-input/labeled-input.component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getSignUpError } from "../../../redux/user/user.selectors";
import { setSignUpError } from "../../../redux/user/user.slice";
import { signUp } from "../../../redux/user/user.async";
import { useLoginMutation, useSignUpMutation } from "../../../redux/api/auth.api";
import './sign-up.style.scss';
import PageContainer from "../../../components/page-container/page-container.component";


const defaultSignUpData = {
    email: '',
    password: '',
    repeatedPassword: '',
    firstName: 'user', 
    lastName: 'user'
}

const SignUp = () => {
    const [signUpData, setSignUpData] = useState(defaultSignUpData);
    const {email, password, repeatedPassword} = signUpData;

    const [signUpFunc, {isLoading: isSignUp}] = useSignUpMutation();
    const [signInFunc, {isLoading: isSignIn}] = useLoginMutation();
    
    const signUpError = useSelector(getSignUpError);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cirilicRegex = /[^\u0000-\u007f]/;

    const onChangeHandler = (event) => {
        setSignUpData({...signUpData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(password !== repeatedPassword){
            dispatch(setSignUpError('Пароли не совпадают'));
            return;
        }

        if(password.length < 6) {
            dispatch(setSignUpError('Пароль слишком короткий. Минимальная длина 6 символов'));
            return;
        }

        if(cirilicRegex.test(password) || cirilicRegex.test(email)) {
            dispatch(setSignUpError('Используйте латиницу для почтового адреса и пароля.'));
            return;
        }

        signUp(signUpData, signUpFunc, signInFunc, dispatch, successAuth);
    }

    function successAuth() {
        clearForm();
        navigate(-2)
    }

    function clearForm() {
        setSignUpData(defaultSignUpData)
    }

    useEffect(() => {dispatch(setSignUpError(''))},[]);    

    return (
        <PageContainer title='Регистрация'>
            <Form 
                title='Регистрация'
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
                errorStatus={signUpError}
                btnText='Зарегистрироваться'
                routeLink={{url: '/sign-in', text: 'Уже есть аккаунт?'}}
            />
        </PageContainer>
    );
};

export default SignUp;