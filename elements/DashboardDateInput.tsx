import DashboardFormLabel from "./DashboardFormLabel"

const DashboardDateInput = () => {
    return (
        <>
            <DashboardFormLabel label="Due date" />
            <input className="date-input width-100 margin-vertical-10" type="date" />
        </>
    )
}

export default DashboardDateInput