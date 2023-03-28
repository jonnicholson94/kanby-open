
import { useState, useEffect } from "react"
import { displayStatus, hideStatus } from "../../features/statusSlice"
import { useAppDispatch } from "../../lib/reduxHelpers"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { useFetchSingleTaskQuery, useUpdateTaskMutation } from "../../features/apiSlice"

import DashboardContainer from "../../components/DashboardContainer"
import DashboardTitle from "../../components/DashboardTitle"
import DashboardDivider from "../../elements/DashboardDivider"
import DashboardBackButton from "../../elements/DashboardBackButton"
import DashboardTextarea from "../../elements/DashboardTextarea"
import DashboardComments from "../../components/DashboardComments"
import DashboardStatus from "../../elements/DashboardStatus"
import DashboardSubTasks from "../../components/DashboardSubTasks"
import DashboardCategory from "../../elements/DashboardCategory"
import DashboardDateInput from "../../elements/DashboardDateInput"

import { TaskComment, Category, Status, SubTask } from "../../types/dataSchema"
import SplashScreen from "../../components/SplashScreen"
import PopupContainer from "../../elements/PopupContainer"


const ViewTask = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()
    const router = useRouter()

    const dispatch = useAppDispatch()

    const { task_id } = router.query

    const { data, isFetching } = useFetchSingleTaskQuery(task_id)
    const [updateTask] = useUpdateTaskMutation()

    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [subTasks, setSubTasks] = useState<SubTask[] | undefined[]>([])
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>("")
    const [comments, setComments] = useState<TaskComment[]>([])

    const [pending, setPending] = useState<boolean>(false)

    useEffect(() => {
        if (data) {
            setTitle(data[0].title)
            setDescription(data[0].description)
            setStatus(data[0].status)
            setSubTasks(data[0].sub_tasks)
            setCategory(data[0].category)
            setDate(data[0].due_date)
            setComments(data[0].comments)
            
        }
    }, [data])

    const handleTaskUpdate = async () => {

        setPending(true)

        try {
            const response = await updateTask({
                task_id,
                title,
                description,
                status,
                due_date: date
            })

            dispatch(displayStatus({
                payloadMessage: "Successfully updated your task",
                payloadType: "success"
             }))
         
             setTimeout(() => dispatch(hideStatus()), 5000)

            console.log(response);
            
        } catch (error) {
            console.log(error);
            dispatch(displayStatus({
                payloadMessage: error,
                payloadType: "error"
             }))
         
             setTimeout(() => dispatch(hideStatus()), 5000)
        }

        setPending(false)

    }

    if (isLoading) {
        return <SplashScreen />
    }
    
    if (!user) {
        router.push("/")
    }
        

    if (data || isFetching) {
        return (
            <DashboardContainer>
                <DashboardBackButton showSaveButton={true} onClick={handleTaskUpdate} pending={pending} />
                <div className="view-task-container auto-height width-100 flex-around-start margin-vertical-50">
                    <div className="view-task-left width-55 flex-center-start flex-column">
                        <DashboardTitle state={title} setState={setTitle} />
                        <DashboardDivider />
                        <DashboardTextarea state={description} setState={setDescription} />
                        <DashboardDivider />
                        <DashboardComments task_id={task_id} comments={comments} setComments={setComments} />
                    </div>
                    <div className="view-task-right auto-height width-35 flex-start flex-column">
                        <DashboardStatus state={status} setState={setStatus} />
                        <DashboardDivider />
                        <DashboardSubTasks state={subTasks} setState={setSubTasks} task_id={task_id} />
                        <DashboardDivider />
                        <DashboardCategory state={category} setState={setCategory} />
                        <DashboardDivider />
                        <DashboardDateInput state={date} setState={setDate} />
                    </div>
                </div>
            <PopupContainer />
            </DashboardContainer>
        )
    }
}

export default ViewTask