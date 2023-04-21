
import { useState } from "react"
import { checkError } from "../lib/checkError"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

import AuthButton from "../elements/AuthButton"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLabel from "../elements/AuthLabel"
import ErrorMessage from "./ErrorMessage"
import SuccessMessage from "./SuccessMessage"


const ResetPassword = ({ onClick }) => {

    const [email, setEmail] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    const supabase = useSupabaseClient()

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault()

        setPending(true)
        setError("")
        setSuccess("")

        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(email)

            if (error) {
                setError(() => checkError(error.message))
                setPending(false)
                return 
            } else if (data) {
                setSuccess("Successfully sent a password reset to your email address. Check your inbox.")
                setPending(false)
                return 
            }
        } catch (error) {
            setError(() => checkError(error.message))
            setPending(false)
        }
    }


    return (
        <>
        <form className="auth-form auto-height width-50 margin-vertical-50 flex-center flex-column" onSubmit={handleSubmit}>
            <AuthHeading content="Reset your Kanby password" />
            <AuthLabel htmlFor="email" content="Email" />
            <AuthInput name="email" id="email" type="email" placeholder="Enter your email" state={email} setState={setEmail} />
            <AuthButton content="Send reset email" pending={pending} />
            <p className="auth-link width-80 margin-vertical-30" onClick={() => onClick('sign-in')}>Back to sign in</p>
        </form>
        { error && <ErrorMessage message={error} /> }
        { success && <SuccessMessage message={success} /> }
        </>
    )
}

export default ResetPassword