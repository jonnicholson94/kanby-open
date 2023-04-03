
import { useState } from "react"

import useDispatchStatus from "../lib/hooks/useDispatchStatus"

import { Helmet } from "react-helmet"

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

    const [pending, setPending] = useState<boolean>(false)

    const [show, setShow] = useState(null)

    const dispatchStatus = useDispatchStatus()

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
                    }).unwrap()
                
                if (response === 200) {
                    router.push("dashboard")

                    dispatchStatus("Successfully created your task", "success")
                 
                }

                if (response === 400) {
                    setPending(false)

                    dispatchStatus("Failed to create your task", "error")
                    
                }
               
            } catch (error) {
                dispatchStatus("Failed to create your task", "error")
                setPending(false)
            }
        }

    return (
        <>
        <Helmet>
                <title>
                    Create a task | Kanby
                </title>
            </Helmet>
        <DashboardContainer>
                <DashboardBackButton showSaveButton={true} onClick={handleSubmit} pending={pending} showHamburger={setShow} state={title} />
                <div className="view-task-container auto-height width-100 flex-around-start">
                    <div className="view-task-left width-65 flex-center flex-column">
                        <DashboardTitle state={title} setState={setTitle} />
                        <DashboardTextarea state={description} setState={setDescription} />
                    </div>
                    <div className="view-task-right auto-height width-35 flex-start flex-column relative">
                        <DashboardStatus state={status} setState={setStatus} />
                        
                        <DashboardCategory state={category} setState={setCategory} />
                        <DashboardDateInput state={date} setState={setDate} />
                    </div>
                </div>
                <DashboardHamburger show={show} setShow={setShow} status={status} setStatus={setStatus} category={category} setCategory={setCategory} task_id="" type="create" />
            </DashboardContainer>
            </>
    )
}

export default CreateTask