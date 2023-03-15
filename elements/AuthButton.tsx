
type Props = {
    content: string
}

const AuthButton = ({ content }: Props) => {
    return (
        <button className="auth-button height-50 width-80 margin-vertical-30" type="submit">{content}</button>
    )
}

export default AuthButton