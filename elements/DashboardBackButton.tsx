
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"

const DashboardBackButton = () => {
    return (
        <div className="auto-height width-100 flex-start">
            <Link className="auto-height flex-center" href="/dashboard">
                <FontAwesomeIcon className="margin-right-10" icon={faLongArrowLeft} />
                <p>Go back</p>
            </Link>
        </div>
    )
}

export default DashboardBackButton