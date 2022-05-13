import { Fragment, useState } from "react";
import LabeledInput from "../../inputs/labeled_input/labeled_input.component";
import { signIn } from "../../../utils/server/authentification/sign-in";
import Form from "../form/form.component";
import './sign_in_form.style.scss';
import { useDispatch } from "react-redux/es/exports";
import { setUserAction } from "../../../redux/user/user.actions";
import { useNavigate } from "react-router";

const defaultSignInData = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [signInData, setSignInData] = useState(defaultSignInData);
    const {email, password} = signInData;
    const [signInError, setSignInError] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setSignInData({...signInData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setSignInError('');
        setSuccessMessage('');

        signIn(email, password, setSignInError, setIsFetching, successFetching);
    }

    function successFetching(userData) {
        dispatch(setUserAction(userData));
        clearForm();
        setIsFetching(false);
        setSuccessMessage('Вы успешно вошли в свой аккаунт');
        setTimeout(() => navigate(-1), 180);
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
                successStatus={successMessage}
                btnText='Войти'
            />
        </div>
    )
};

export default SignInForm;