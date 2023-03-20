
import DashboardFormLabel from "./DashboardFormLabel"

const DashboardTextarea = () => {
    return (
        <>
            <DashboardFormLabel label="Description" />
            <textarea className="dashboard-textarea width-100 margin-vertical-10" />
        </>
    )
}

export default DashboardTextarea