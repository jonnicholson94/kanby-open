
import { useState } from "react"

import { Status, Category } from "../types/dataSchema"

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

const CreateTask = () => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>("")

    return (
        <DashboardContainer>
            <DashboardBackButton />
            <DashboardForm>
                <DashboardTitle state={title} setState={setTitle} />
                <DashboardTextarea state={description} setState={setDescription} />
                <DashboardStatus state={status} setState={setStatus} />
                <DashboardCategory state={category} setState={setCategory} />
                <DashboardDateInput state={date} setState={setDate} />
                <DashboardSubTasks />
                
                <DashboardButton content="Create task" />
            </DashboardForm>
        </DashboardContainer>
    )
}

export default CreateTask