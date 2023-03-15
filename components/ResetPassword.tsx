import AuthButton from "../elements/AuthButton"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLabel from "../elements/AuthLabel"

const ResetPassword = ({ onClick }) => {
    return (
        <form className="auth-form auto-height width-50 margin-vertical-50 flex-center flex-column">
            <AuthHeading content="Reset your Kanby password" />
            <AuthLabel htmlFor="email" content="Email" />
            <AuthInput name="email" id="email" type="email" />
            <AuthButton content="Send reset email" />
            <p className="auth-link width-80 margin-vertical-30" onClick={() => onClick('sign-in')}>Back to sign in</p>
        </form>
    )
}

export default ResetPassword