
import AuthButton from "../elements/AuthButton"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLabel from "../elements/AuthLabel"

const SignIn = ({ onClick }) => {

    return (
        <form className="auth-form auto-height width-50 margin-vertical-50 flex-center flex-column">
            <AuthHeading content="Sign in to Kanby" />
            <AuthLabel htmlFor="email" content="Email" />
            <AuthInput name="email" id="email" type="email" placeholder="Enter your email" />
            <AuthLabel htmlFor="password" content="Password" />
            <AuthInput name="password" id="password" type="password" placeholder="Enter your password" />
            <AuthButton content="Continue" />
            <p className="auth-link width-80 margin-top-30" onClick={() => onClick('forgot-password')}>Forgot your password?</p>
            <p className="auth-link width-80 margin-vertical-30" onClick={() => onClick('register')}>New user? Register for an account</p>
        </form>
    )
}

export default SignIn