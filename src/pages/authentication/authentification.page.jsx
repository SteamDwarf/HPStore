import { Outlet } from "react-router";
import SignInForm from "../../components/forms/sign_in_form/sign_in_form.component";
import SignUpForm from "../../components/forms/sign_up_form/sign_up_form.component";
import './authentification.style.scss';

const Authentification = () => {
    return (
        <div className="authentification-block">
            <Outlet />
{/*             <SignUpForm />
            <SignInForm /> */}
        </div>
    );
}

export default Authentification;