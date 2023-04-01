
import { useState } from 'react'

import { validateLength } from '../lib/inputValidation'

type Props = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardTitle = ({ state, setState }: Props) => {

    const [error, setError] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setState(e.target.value)

        setError(() => validateLength(e.target.value))

    }

    return (
        <>
            <input className={`dashboard-input title width-95 margin-top-30 ${error ? "error-input" : null }`} type="text" value={state} onChange={handleChange} placeholder="Enter a title" />
            { error ? <p className="width-95 margin-vertical-10 error-paragraph">{error}</p> : null }
        </>
    )
}

export default DashboardTitle