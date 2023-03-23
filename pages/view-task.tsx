
import { useState } from "react"

import DashboardContainer from "../components/DashboardContainer"
import DashboardTitle from "../components/DashboardTitle"
import DashboardDivider from "../elements/DashboardDivider"
import DashboardBackButton from "../elements/DashboardBackButton"
import DashboardTextarea from "../elements/DashboardTextarea"
import DashboardComments from "../components/DashboardComments"
import DashboardStatus from "../elements/DashboardStatus"
import DashboardSubTasks from "../components/DashboardSubTasks"
import DashboardCategory from "../elements/DashboardCategory"

import { Category, Status, SubTask } from "../types/dataSchema"
import DashboardDateInput from "../elements/DashboardDateInput"

const ViewTask = () => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [subTasks, setSubTasks] = useState<SubTask[] | undefined[]>([])
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>("")

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
}

export default ViewTask