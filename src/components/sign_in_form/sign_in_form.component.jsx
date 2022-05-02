import { Fragment, useState } from "react";
import LabeledInput from "../labeled_input/labeled_input.component";
import { signIn } from "../../utils/server/authentification/sign-in";
import Form from "../form/form.component";
import './sign_in_form.style.scss';

const defaultSignInData = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [signInData, setSignInData] = useState(defaultSignInData);
    const {email, password} = signInData;
    const [signInError, setSignInError] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const onChangeHandler = (event) => {
        setSignInData({...signInData, [event.target.name]: event.target.value})
    }
    /* const changeEmail = (event) => {
        setSignInData({...signInData, email: event.target.value});
    }
    const changePassword = (event) => {
        setSignInData({...signInData, password: event.target.value});
    } */

    const onSubmit = (event) => {
        event.preventDefault();
        setSignInError('');

        signIn(email, password, setSignInError, setIsFetching, successFetching);
    }

    function successFetching() {
        clearForm();
        setIsFetching(false);
        setSignInError('Вы успешно вошли в свой аккаунт');
    }

    function clearForm() {
        setSignInData(defaultSignInData)
    }

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
                isFetching={isFetching}
                errorStatus={signInError}
                btnText='Войти'
            />
        </div>
    )
    /* return (
        <form className="sign-in-form" onSubmit={onSubmit}>
            <h1>Авторизоваться</h1>
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

            {isFetching 
                ? <label className="sign-up-error">Подождите...</label>
                : null
            }
            <label className="sign-up-error">{signInError}</label>
            <FormBtn text='Войти'/>
        </form>
    ) */
};

export default SignInForm;