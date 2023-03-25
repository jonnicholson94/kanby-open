
import { useState } from 'react'
import Router from 'next/router'

import { signup } from '../lib/supabase/authFunctions'
import { checkError } from '../lib/checkError'

import AuthButton from "../elements/AuthButton"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLabel from "../elements/AuthLabel"
import ErrorMessage from './ErrorMessage'

const Register = ({ onClick }) => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault()

        setPending(true)
        setError("")

        try {

            const {data, error} = await signup(email, password) 

            if (error) {
                setError(() => checkError(error.message))
                setPending(false)
                return
            } else if (data) {
                Router.push("dashboard")
            }

        } catch (error) {

            setError(() => checkError(error.message))
            setPending(false)
            
        }

        setPending(false)

    }

    return (
        <>
        <form className="auth-form auto-height width-50 margin-vertical-50 flex-center flex-column" onSubmit={handleSubmit}>
            <AuthHeading content="Create your Kanby account" />
            <AuthLabel htmlFor="email" content="Email" />
            <AuthInput name="email" id="email" type="email" placeholder="Enter your email" state={email} setState={setEmail} />
            <AuthLabel htmlFor="password" content="Password" />
            <AuthInput name="password" id="password" type="password" placeholder="Enter a password" state={password} setState={setPassword} />
            <AuthButton content="Create an account" pending={pending} />
            <p className="auth-link width-80 margin-vertical-30" onClick={() => onClick('sign-in')}>Got an account? Sign in instead</p>
        </form>
        { error && <ErrorMessage message={error} /> }
        </>
    )
}

export default Register