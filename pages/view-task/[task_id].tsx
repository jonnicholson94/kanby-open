
import { useState, useEffect } from "react"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { useFetchSingleTaskQuery } from "../../features/apiSlice"

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
import Spinner from "../../elements/Spinner"

import { Category, Status, SubTask } from "../../types/dataSchema"


const ViewTask = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()
    const router = useRouter()

    const { task_id } = router.query

    console.log(task_id);

    const { data, isFetching, error } = useFetchSingleTaskQuery(task_id)

    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [subTasks, setSubTasks] = useState<SubTask[] | undefined[]>([])
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>("")

    useEffect(() => {
        if (data) {
            setTitle(data[0].title)
            setDescription(data[0].description)
            setStatus(data[0].status)
            setSubTasks(data[0].sub_tasks)
            setCategory(data[0].category)
            setDate(data[0].due_date)
        }
    }, [data])

        if (isLoading) {
            return <Spinner />
        }
    
        if (!user) {
            router.push("/")
        }
    
        if (isFetching) {
            return <Spinner />
        }
        
        return (
            <DashboardContainer>
                <DashboardBackButton showSaveButton={true} />
                <div className="view-task-container auto-height width-100 flex-around-start margin-vertical-50">
                    <div className="view-task-left width-55 flex-center-start flex-column">
                        <DashboardTitle state={title} setState={setTitle} />
                        <DashboardDivider />
                        <DashboardTextarea state={description} setState={setDescription} />
                        <DashboardDivider />
                        <DashboardComments />
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
    // }
}

export default ViewTask