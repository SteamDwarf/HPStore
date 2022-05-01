import { useState } from "react";
import { signUp } from "../../utils/server/authentification/sign-up";
import { fetchFromServer, fetchUserFromServer } from "../../utils/server/fetches/serverFetches";
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

    const changeEmail = (event) => {
        setSignUpData({...signUpData, email: event.target.value});
    }
    const changePassword = (event) => {
        setSignUpData({...signUpData, password: event.target.value});
    }
    const changeRepeatedPassword = (event) => {
        setSignUpData({...signUpData, repeatedPassword: event.target.value});
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setSignUpError('');

        if(password !== repeatedPassword){
            setSignUpError('Пароли не совпадают');
            return;
        }

        signUp(email, password, setSignUpError);
    }

    function clearForm() {
        setSignUpData({
            email: '',
            password: '',
            repeatedPassword: ''
        })
    }

    return (
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
            <label className="sign-up-error">{signUpError}</label>
            <FormBtn text='Зарегистрироваться'/>
        </form>
    );
};

export default SignUpForm;