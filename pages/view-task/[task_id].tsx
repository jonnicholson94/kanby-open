
import { useState, useEffect } from "react"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { useFetchSingleTaskQuery, useSaveCommentMutation } from "../../features/apiSlice"

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


const ViewTask = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()
    const router = useRouter()

    const { task_id } = router.query

    const { data, isFetching } = useFetchSingleTaskQuery(task_id)

    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [subTasks, setSubTasks] = useState<SubTask[] | undefined[]>([])
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>("")
    const [comments, setComments] = useState<TaskComment[]>([])

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

    if (isLoading) {
        return <SplashScreen />
    }

        if (isFetching) {
            return <SplashScreen />
        }
    
        if (!user) {
            router.push("/")
        }
        

    if (data) {
        return (
            <DashboardContainer>
                <DashboardBackButton showSaveButton={true} />
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
                        <DashboardSubTasks state={subTasks} setState={setSubTasks} />
                        <DashboardDivider />
                        <DashboardCategory state={category} setState={setCategory} />
                        <DashboardDivider />
                        <DashboardDateInput state={date} setState={setDate} />
                    </div>
                </div>
                
            </DashboardContainer>
        )
    }
}

export default ViewTask