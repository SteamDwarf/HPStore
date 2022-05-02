import SignInForm from "../../components/sign_in_form/sign_in_form.component";
import SignUpForm from "../../components/sign_up_form/sign_up_form.component";
import './authentification.style.scss';

const Authentification = () => {
    return (
        <div className="authentification-block">
            <SignUpForm />
            <SignInForm />
        </div>
    );
}

export default Authentification;