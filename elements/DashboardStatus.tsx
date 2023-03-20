import DashboardFormLabel from "./DashboardFormLabel"

const DashboardStatus = () => {
    return (
        <>
            <DashboardFormLabel label="Status" />
            <div className="width-100 auto-height flex-around margin-vertical-10">
                <button className="status-button active-status width-27 margin-vertical-10">Backlog</button>
                <button className="status-button width-27 margin-vertical-10">In progress</button>
                <button className="status-button width-27 margin-vertical-10">Cancelled</button>
            </div>
        </>
    )
}

export default DashboardStatus