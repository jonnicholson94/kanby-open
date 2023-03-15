
type Props = {
    htmlFor: string,
    content: string
}

const AuthLabel = ({ htmlFor, content }: Props) => {
    return (
        <label className="auth-label auto-height width-80" htmlFor={htmlFor}>{content}</label>
    )
}

export default AuthLabel