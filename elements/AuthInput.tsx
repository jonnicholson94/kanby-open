
import { useState } from 'react'
import { validateEmail, validatePassword } from '../lib/inputValidation'

type Props = {
    name: string,
    id: string,
    type: "email" | "password", 
    placeholder: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const AuthInput = ({ name, id, type, placeholder, state, setState }: Props) => {

    const [error, setError] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setState(e.target.value)

        if (e.target.type === "email") {
            setError(() => validateEmail(e.target.value))
        } else if (e.target.type === "password") {
            setError(() => validatePassword(e.target.value))
        }
        
    }

    return (
        <>
        <input className={error ? "auth-input error-border height-50 width-80" : "auth-input height-50 width-80"} name={name} id={id} type={type} placeholder={placeholder} value={state} onChange={handleChange} /> 
        { error && <p className="input-error auto-height width-80 margin-bottom-20">{error}</p>}
        </>
    )
}

export default AuthInput