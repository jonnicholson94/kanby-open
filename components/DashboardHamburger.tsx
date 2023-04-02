
import DashboardStatus from "../elements/DashboardStatus"
import DashboardCategory from "../elements/DashboardCategory"
import AlertPopup from "../elements/AlertPopup"

import { displayStatus, hideStatus } from "../features/statusSlice"
import { useAppDispatch } from "../lib/reduxHelpers"
import { useRouter } from "next/router"

import { useDeleteTaskMutation } from "../features/apiSlice"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import { Status, Category } from "../types/dataSchema"

type Props = {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    status: Status,
    setStatus: React.Dispatch<React.SetStateAction<Status>>,
    category: Category, 
    setCategory: React.Dispatch<React.SetStateAction<Category>>,
    task_id?: string | string[],
    type?: "view" | "create"
}

const DashboardHamburger = ({ show, setShow, status, setStatus, category, setCategory, task_id, type }: Props) => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const [deleteTask] = useDeleteTaskMutation()

    console.log(task_id)

    const handleTaskDelete = async () => {

        try {
            const response = await deleteTask({
                task_id
            })

            if (response) {
                router.push("/dashboard")

                console.log(response)

                dispatch(displayStatus({
                    payloadMessage: "Successfully deleted your task",
                    payloadType: "success"
                 }))
             
                 setTimeout(() => dispatch(hideStatus()), 5000)
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
            { show ? <div className="dashboard-hamburger-blocker" onClick={() => setShow(false)}></div> : null }
            <div className="dashboard-hamburger width-80 flex-start flex-column relative" data-state={show}>
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