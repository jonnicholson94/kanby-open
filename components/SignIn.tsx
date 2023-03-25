
import { useState } from 'react'
import Router from 'next/router'

import { checkError } from '../lib/checkError'
import { login } from '../lib/supabase/authFunctions'

import AuthButton from "../elements/AuthButton"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLabel from "../elements/AuthLabel"
import ErrorMessage from './ErrorMessage'

const SignIn = ({ onClick }) => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault()

        setPending(true)
        setError("")

        try {

            const { data, error } = await login(email, password)

            if (error) {
                setError(() => checkError(error.message))
                setPending(false)
                return 
            } else if (data) {
                Router.push("/dashboard")
            }

        } catch (error) {

            setError(() => checkError(error.message))
            setPending(false)

        }

    }

    return (
        <>
        <form className="auth-form auto-height width-50 margin-vertical-50 flex-center flex-column" onSubmit={handleSubmit}>
            <AuthHeading content="Sign in to Kanby" />
            <AuthLabel htmlFor="email" content="Email" />
            <AuthInput name="email" id="email" type="email" placeholder="Enter your email" state={email} setState={setEmail} />
            <AuthLabel htmlFor="password" content="Password" />
            <AuthInput name="password" id="password" type="password" placeholder="Enter your password" state={password} setState={setPassword} />
            <AuthButton content="Continue" pending={pending} />
            <p className="auth-link width-80 margin-top-30" onClick={() => onClick('forgot-password')}>Forgot your password?</p>
            <p className="auth-link width-80 margin-vertical-30" onClick={() => onClick('register')}>New user? Register for an account</p>
        </form>
        { error && <ErrorMessage message={error} /> }
        </>
    )
}

export default SignIn