
type Props = {
    name: string,
    id: string,
    type: string, 
}

const AuthInput = ({ name, id, type }: Props) => {
    return (
        <input className="auth-input height-50 width-80" name={name} id={id} type={type} />
    )
}

export default AuthInput