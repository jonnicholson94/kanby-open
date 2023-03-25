import Spinner from "./Spinner"

type Props = {
    content: string,
    pending: boolean,
}

const AuthButton = ({ content, pending }: Props) => {
    return (
        <button className="auth-button height-50 width-80 margin-vertical-30" type="submit">
            { pending ? <Spinner /> : <p>{content}</p> }
        </button>
    )
}

export default AuthButton