import { Fragment, useState } from "react";
import { signUp } from "../../utils/server/authentification/sign-up";
import Form from "../form/form.component";
import FormBtn from "../form_btn/form_btn.component";
import LabeledInput from "../labeled_input/labeled_input.component";
import './sign_up_form.style.scss';

const defaultSignUpData = {
    email: '',
    password: '',
    repeatedPassword: ''
}

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState(defaultSignUpData);
    const {email, password, repeatedPassword} = signUpData;
    const [signUpError, setSignUpError] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const onChangeHandler = (event) => {
        setSignUpData({...signUpData, [event.target.name]: event.target.value})
    }

    /* const changeEmail = (event) => {
        setSignUpData({...signUpData, email: event.target.value});
    }
    const changePassword = (event) => {
        setSignUpData({...signUpData, password: event.target.value});
    }
    const changeRepeatedPassword = (event) => {
        setSignUpData({...signUpData, repeatedPassword: event.target.value});
    } */

    const onSubmit = async (event) => {
        event.preventDefault();
        setSignUpError('');

        if(password !== repeatedPassword){
            setSignUpError('Пароли не совпадают');
            return;
        }

        signUp(email, password, setSignUpError, setIsFetching, successFetching);
    }

    function successFetching() {
        clearForm();
        setIsFetching(false);
        setSignUpError('Пользователь успешно зарегистрирован');
    }

    function clearForm() {
        setSignUpData(defaultSignUpData)
    }

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
                isFetching={isFetching}
                errorStatus={signUpError}
                btnText='Зарегистрироваться'
            />
        </div>
    );
    /* return (
        <form className="sign-up-form" onSubmit={onSubmit}>
            <h1>Регистрация</h1>
            <div className="input-block">
                <LabeledInput 
                    labelText='Электронная почта'
                    inputType='email'
                    inputValue={email}
                    onChange={changeEmail} 
                    isRequired={true}
                />
                <label className="input_error-label"></label>
            </div>
            <div className="input-block">
                <LabeledInput 
                    labelText='Пароль'
                    inputType='password'
                    inputValue={password}
                    onChange={changePassword} 
                    isRequired={true}
                />
                <label className="input_error-label"></label>
            </div>
            <div className="input-block">
                <LabeledInput 
                    labelText='Подтвердите пароль'
                    inputType='password'
                    inputValue={repeatedPassword} 
                    onChange={changeRepeatedPassword}
                    isRequired={true}
                />
                <label className="input_error-label"></label>
            </div>
            {isFetching 
                ? <label className="sign-up-error">Подождите...</label>
                : null
            }
            <label className="sign-up-error">{signUpError}</label>
            <FormBtn text='Зарегистрироваться'/>
        </form>
    ); */
};

export default SignUpForm;