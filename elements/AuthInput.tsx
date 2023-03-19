
type Props = {
    name: string,
    id: string,
    type: string, 
    placeholder: string
}

const AuthInput = ({ name, id, type, placeholder }: Props) => {
    return (
        <input className="auth-input height-50 width-80" name={name} id={id} type={type} placeholder={placeholder} />
    )
}

export default AuthInput