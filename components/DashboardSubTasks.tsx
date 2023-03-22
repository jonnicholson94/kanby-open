import DashboardFormLabel from "../elements/DashboardFormLabel"

const DashboardSubTasks = () => {
    return (
        <>
            <DashboardFormLabel label="Sub tasks" />
            <div className="auto-height width-100 flex-center flex-column">
                <div className="sub-task auto-height width-100 flex-center margin-vertical-10">
                    <div className="auto-height width-10 flex-center margin-vertical-10">
                        <input type="checkbox" />
                    </div>
                    <div className="auto-height width-90 flex-start margin-vertical-10">
                        <p>Task title</p>
                    </div>
                </div>
                <div className="add-task auto-height width-100 flex-center">
                    <input className="task-input height-100 width-90" type="text" />
                    <button className="task-button height-100 width-10">Add</button>
                </div>
            </div>
        </>
    )
}

export default DashboardSubTasks