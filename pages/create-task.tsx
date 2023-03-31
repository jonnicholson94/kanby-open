
import { useState } from "react"

import { displayStatus, hideStatus } from "../features/statusSlice"
import { useAppDispatch } from "../lib/reduxHelpers"

import { Status, Category, SubTask } from "../types/dataSchema"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { useAddNewTaskMutation } from "../features/apiSlice"

import DashboardContainer from "../components/DashboardContainer"
import DashboardSubTasks from "../components/DashboardSubTasks"
import DashboardTitle from "../components/DashboardTitle"
import DashboardBackButton from "../elements/DashboardBackButton"
import DashboardCategory from "../elements/DashboardCategory"
import DashboardDateInput from "../elements/DashboardDateInput"
import DashboardStatus from "../elements/DashboardStatus"
import DashboardTextarea from "../elements/DashboardTextarea"
import SplashScreen from "../components/SplashScreen"
import DashboardHamburger from "../components/DashboardHamburger"

const CreateTask = () => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>()
    const [subTasks, setSubTasks] = useState<SubTask[] | undefined[]>([])

    const [pending, setPending] = useState<boolean>(false)

    const [show, setShow] = useState(false)

    const dispatch = useAppDispatch()

    const { isLoading } = useSessionContext()
    const user = useUser()
    const router = useRouter()

    const [addNewTask] = useAddNewTaskMutation()

    if (isLoading) {
        return <SplashScreen />
    }

    if (!user) {
        router.push("/")
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault()
        setPending(true)
        
            try {
            
                const response = await addNewTask({
                        user_id: user.id,
                        title: title,
                        description: description,
                        status: status,
                        category: category,
                        due_date: date,
                        sub_tasks: subTasks,
                        comments: []
                    }).unwrap()
                
                if (response === 200) {
                    router.push("dashboard")
                    setTimeout(() => dispatch(displayStatus({
                        payloadMessage: "Successfully created your task",
                        payloadType: "success"
                     })), 500)
                 
                     setTimeout(() => dispatch(hideStatus()), 5000)
                }

                if (response === 400) {
                    console.log("There was an error");
                    setPending(false)

                    setTimeout(() => dispatch(displayStatus({
                        payloadMessage: "Failed to create your task",
                        payloadType: "error"
                     })), 2000)
                 
                     setTimeout(() => dispatch(hideStatus()), 5000)
                    
                }
               
            } catch (error) {
                console.log(error);
                console.log("Caught an error")
                setPending(false)
            }
        }

    return (
        <DashboardContainer>
                <DashboardBackButton showSaveButton={true} onClick={handleSubmit} pending={pending} showHamburger={setShow} />
                <div className="view-task-container auto-height width-100 flex-around-start">
                    <div className="view-task-left width-65 flex-center flex-column">
                        <DashboardTitle state={title} setState={setTitle} />
                        <DashboardTextarea state={description} setState={setDescription} />
                        <DashboardSubTasks state={subTasks} setState={setSubTasks} />
                    </div>
                    <div className="view-task-right auto-height width-35 flex-start flex-column relative">
                        <DashboardStatus state={status} setState={setStatus} />
                        
                        <DashboardCategory state={category} setState={setCategory} />
                        <DashboardDateInput state={date} setState={setDate} />
                    </div>
                </div>
                { show ? <DashboardHamburger setShow={setShow} status={status} setStatus={setStatus} category={category} setCategory={setCategory} task_id="" type="create" /> : null }
            </DashboardContainer>
    )
}

export default CreateTask