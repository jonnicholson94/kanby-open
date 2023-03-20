
import DashboardContainer from "../components/DashboardContainer"
import DashboardForm from "../components/DashboardForm"
import DashboardBackButton from "../elements/DashboardBackButton"
import DashboardCategory from "../elements/DashboardCategory"
import DashboardDateInput from "../elements/DashboardDateInput"
import DashboardStatus from "../elements/DashboardStatus"
import DashboardTextarea from "../elements/DashboardTextarea"

const CreateTask = () => {
    return (
        <DashboardContainer>
            <DashboardBackButton />
            <DashboardForm>
                <DashboardCategory />
                <DashboardDateInput />
                <DashboardTextarea />
                <DashboardStatus />
            </DashboardForm>
        </DashboardContainer>
    )
}

export default CreateTask