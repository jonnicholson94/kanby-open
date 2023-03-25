
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    message: string
}

const SuccessMessage = ({ message }: Props) => {
    return (
        <div className="success-message auto-height width-50 flex-center">
            <div className="auto-height width-10 flex-center margin-vertical-30">
                <FontAwesomeIcon className="success-icon" icon={faExclamationCircle} />
            </div>
            <p className="success-paragraph auto-height width-80">{message}</p>
        </div>
    )
}

export default SuccessMessage