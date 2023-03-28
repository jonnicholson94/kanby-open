
import { useAppSelector } from "../lib/reduxHelpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const PopupContainer = () => {

    const status = useAppSelector((state) => state.status.display)
    const message = useAppSelector((state) => state.status.message)
    const type = useAppSelector((state) => state.status.type)

    return (
        <>
        { status ? 
        <div className="popup-container auto-height flex-around">
                <div className="auto-height width-10 flex-center margin-vertical-30">
                { type === "success" ? <FontAwesomeIcon className="success-icon" icon={faCheckCircle} /> : <FontAwesomeIcon className="error-icon" icon={faCircleXmark} />}
                </div>
                <p className="auto-height width-80 margin-vertical-30">{message}</p>
        </div> : null }
        </>
    )
}

export default PopupContainer