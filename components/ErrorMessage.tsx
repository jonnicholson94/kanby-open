import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    message: string
}

const ErrorMessage = ({ message }: Props) => {
    return (
        <div className="error-message auto-height width-50 flex-center">
            <div className="auto-height width-10 flex-center margin-vertical-30">
                <FontAwesomeIcon className="error-icon" icon={faExclamationCircle} />
            </div>
            <p className="error-paragraph auto-height width-80">{message}</p>
        </div>
    )
}

export default ErrorMessage