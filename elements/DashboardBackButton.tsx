
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"

type Props = {
    showSaveButton: boolean
}

const DashboardBackButton = ({ showSaveButton }: Props) => {
    return (
        <div className="auto-height width-100 flex-center">
            <div className="auto-height width-47 flex-start">
                <Link className="auto-height flex-center" href="/dashboard">
                    <FontAwesomeIcon className="margin-right-10 margin-left-10" icon={faLongArrowLeft} />
                    <p>Go back</p>
                </Link>
            </div>
            <div className="auto-height width-47 flex-end">
                { showSaveButton === true ? <button className="save-button">Save</button> : null }
            </div>
        </div>
    )
}

export default DashboardBackButton