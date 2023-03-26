
import { useState } from "react"

import { Status, Category, SubTask } from "../types/dataSchema"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { useAddNewTaskMutation } from "../features/apiSlice"

import DashboardContainer from "../components/DashboardContainer"
import DashboardForm from "../components/DashboardForm"
import DashboardSubTasks from "../components/DashboardSubTasks"
import DashboardTitle from "../components/DashboardTitle"
import DashboardBackButton from "../elements/DashboardBackButton"
import DashboardButton from "../elements/DashboardButton"
import DashboardCategory from "../elements/DashboardCategory"
import DashboardDateInput from "../elements/DashboardDateInput"
import DashboardStatus from "../elements/DashboardStatus"
import DashboardTextarea from "../elements/DashboardTextarea"
import SplashScreen from "../components/SplashScreen"

const CreateTask = () => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>()
    const [subTasks, setSubTasks] = useState<SubTask[] | undefined[]>([])

    const [pending, setPending] = useState<boolean>(false)

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
                }

                if (response === 400) {
                    console.log("There was an error");
                    setPending(false)
                    
                }
               
            } catch (error) {
                console.log(error);
                console.log("Caught an error")
                setPending(false)
            }
        }

    return (
        <DashboardContainer>
            <DashboardBackButton showSaveButton={false} />
            <DashboardForm handleSubmit={handleSubmit}>
                <DashboardTitle state={title} setState={setTitle} />
                <DashboardTextarea state={description} setState={setDescription} />
                <DashboardStatus state={status} setState={setStatus} />
                <DashboardCategory state={category} setState={setCategory} />
                <DashboardDateInput state={date} setState={setDate} />
                <DashboardSubTasks state={subTasks} setState={setSubTasks} />
                
                <DashboardButton content="Create task" pending={pending} />
            </DashboardForm>
        </DashboardContainer>
    )
}

export default CreateTask