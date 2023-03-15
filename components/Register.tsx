
import AuthButton from "../elements/AuthButton"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLabel from "../elements/AuthLabel"

const Register = ({ onClick }) => {
    return (
        <form className="auth-form auto-height width-50 margin-vertical-50 flex-center flex-column">
            <AuthHeading content="Create your Kanby account" />
            <AuthLabel htmlFor="email" content="Email" />
            <AuthInput name="email" id="email" type="email" />
            <AuthLabel htmlFor="password" content="Password" />
            <AuthInput name="password" id="password" type="password" />
            <AuthButton content="Create an account" />
            <p className="auth-link width-80 margin-vertical-30" onClick={() => onClick('sign-in')}>Got an account? Sign in instead</p>
        </form>
    )
}

export default Register