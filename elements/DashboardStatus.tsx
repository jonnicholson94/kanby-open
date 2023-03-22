import DashboardFormLabel from "./DashboardFormLabel"

import { Status } from "../types/dataSchema"

type Props = {
    state: Status,
    setState: React.Dispatch<React.SetStateAction<Status>>
}

const DashboardStatus = ({ state, setState }: Props) => {

    const handleClick = (value: Status) => {

        setState(value)

    }

    return (
        <>
            <DashboardFormLabel label="Status" />
            <div className="width-100 auto-height flex-around margin-vertical-10">
                <div className={state === "Backlog" ? "status-button active-status width-27 flex-center margin-vertical-10" : "status-button width-27 flex-center margin-vertical-10"} onClick={() => handleClick("Backlog")}>Backlog</div>
                <div className={state === "In progress" ? "status-button active-status width-27 flex-center margin-vertical-10" : "status-button width-27 flex-center margin-vertical-10"} onClick={() => handleClick("In progress")}>In progress</div>
                <div className={state === "Paused" ? "status-button active-status width-27 flex-center margin-vertical-10" : "status-button width-27 flex-center margin-vertical-10"} onClick={() => handleClick("Paused")}>Paused</div>
            </div>
        </>
    )
}

export default DashboardStatus