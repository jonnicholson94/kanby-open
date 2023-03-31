
import DashboardStatus from "../elements/DashboardStatus"
import DashboardCategory from "../elements/DashboardCategory"
import AlertPopup from "../elements/AlertPopup"

import { displayStatus, hideStatus } from "../features/statusSlice"
import { useAppDispatch } from "../lib/reduxHelpers"
import { useRouter } from "next/router"

import { useDeleteTaskMutation } from "../features/apiSlice"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

type Props = {
    setShow,
    status,
    setStatus,
    category, 
    setCategory,
    task_id?,
    type?
}

const DashboardHamburger = ({ setShow, status, setStatus, category, setCategory, task_id, type }) => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const [deleteTask] = useDeleteTaskMutation()

    const handleTaskDelete = async () => {

        try {
            const response = await deleteTask({
                task_id
            })

            if (response) {
                router.push("/dashboard")
            }

        } catch (error) {
            console.log(error);
            dispatch(displayStatus({
                payloadMessage: error,
                payloadType: "error"
             }))
         
             setTimeout(() => dispatch(hideStatus()), 5000)
            
        }
    }

    return (
        <>
            <div className="dashboard-hamburger-blocker" onClick={() => setShow(false)}></div>
            <div className="dashboard-hamburger width-80 flex-start flex-column relative">
                <div className="auto-height width-80 flex-start margin-vertical-30">
                    { type === "create" ? null :
                    <AlertPopup title="Are you sure you want to delete this task?" description="Once you do, you won't be able to get it back." onClick={handleTaskDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </AlertPopup> }
                </div>
                <DashboardStatus state={status} setState={setStatus} />
                <DashboardCategory state={category} setState={setCategory} />
            </div>
        </>
    )
}

export default DashboardHamburger