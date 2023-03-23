
import { useState } from 'react'

import DashboardFormLabel from "../elements/DashboardFormLabel"
import { SubTask } from "../types/dataSchema"

type Props = {
    state: SubTask[] | undefined[],
    setState: React.Dispatch<React.SetStateAction<SubTask[] | undefined[]>>
}

const DashboardSubTasks = ({ state, setState }: Props) => {

    const [individualTask, setIndividualTask] = useState<string>("")

    const handleClick = () => {
        setState([...state, { title: individualTask, status: false }])
        setIndividualTask("")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIndividualTask(e.target.value)
    }

    return (
        <>
            <DashboardFormLabel label="Sub tasks" />
            <div className="auto-height width-100 flex-center flex-column">
                { state.map(x => {
                    return (
                        <div className="sub-task auto-height width-100 flex-center margin-vertical-10">
                            <div className="auto-height width-10 flex-center margin-vertical-10">
                                <input type="checkbox" value={x.status} />
                            </div>
                            <div className="auto-height width-90 flex-start margin-vertical-10">
                                <p>{x.title}</p>
                            </div>
                        </div>
                    )
                })}
                
                <div className="add-task auto-height width-100 flex-center margin-vertical-10">
                    <input className="task-input height-100 width-80" type="text" value={individualTask} onChange={handleChange} />
                    <div className="task-button height-100 width-20 flex-center" onClick={handleClick}>Add</div>
                </div>
            </div>
        </>
    )
}

export default DashboardSubTasks