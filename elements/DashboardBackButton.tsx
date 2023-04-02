
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowLeft, faTrash, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons"

import Spinner from "./Spinner"

type Props = {
    showSaveButton: boolean,
    onClick?: React.Dispatch<React.FormEvent>,
    pending?: boolean,
    showHamburger: React.Dispatch<React.SetStateAction<boolean>>, 
    state: string
}

const DashboardBackButton = ({ showSaveButton, onClick, pending, showHamburger, state  }: Props) => {
    return (
        <div className="auto-height width-100 flex-center border-separator-bottom">
            <div className="auto-height width-47 flex-start margin-vertical-20">
                <Link className="auto-height flex-center" href="/dashboard">
                    <FontAwesomeIcon className="margin-right-10 margin-left-20" icon={faLongArrowLeft} />
                    <p>Go back</p>
                </Link>
            </div>
            <div className="auto-height width-47 flex-end">
                
                { showSaveButton === true ? <button className="action-button margin-left-10 margin-right-10" onClick={onClick} disabled={ state.length < 1 ? true : false }>
                    {pending ? <Spinner /> : "Save" }
                </button> : null }
                <FontAwesomeIcon className="hamburger-toggle margin-left-10 margin-right-10" icon={faSquareCaretLeft} onClick={() => showHamburger(true)} />
                
            </div>
        </div>
    )
}

export default DashboardBackButton