
type Props = {
    content: string 
}

const AuthHeading = ({ content }: Props) => {
    return (
        <h2 className="auth-heading auto-height width-80 margin-top-40 margin-bottom-20">{content}</h2>
    )
}

export default AuthHeading