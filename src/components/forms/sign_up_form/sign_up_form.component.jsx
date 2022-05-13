import { Fragment, useState } from "react";
import { signUp } from "../../../utils/server/authentification/sign-up";
import Form from "../form/form.component";
import LabeledInput from "../../inputs/labeled_input/labeled_input.component";
import './sign_up_form.style.scss';
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../redux/user/user.actions";
import { useNavigate } from "react-router";

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
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setSignUpData({...signUpData, [event.target.name]: event.target.value})
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setSignUpError('');
        setSuccessMessage('');

        if(password !== repeatedPassword){
            setSignUpError('Пароли не совпадают');
            return;
        }

        signUp(email, password, setSignUpError, setIsFetching, successFetching);
    }

    function successFetching(userData) {
        dispatch(setUserAction(userData));
        clearForm();
        setIsFetching(false);
        setSuccessMessage('Пользователь успешно зарегистрирован');
        setTimeout(() => navigate(-1), 180);
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
                successStatus={successMessage}
                btnText='Зарегистрироваться'
            />
        </div>
    );
};

export default SignUpForm;