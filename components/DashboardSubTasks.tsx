
import { useState } from 'react'

import DashboardFormLabel from "../elements/DashboardFormLabel"
import Spinner from '../elements/Spinner'
import { useAddSubTaskMutation } from '../features/apiSlice'
import { SubTask } from "../types/dataSchema"

type Props = {
    state: SubTask[] | undefined[],
    setState: React.Dispatch<React.SetStateAction<SubTask[] | undefined[]>>,
    task_id?
}

const DashboardSubTasks = ({ state, setState, task_id }: Props) => {

    const [individualTask, setIndividualTask] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)

    const [ addSubTask ] = useAddSubTaskMutation()

    const toggleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {

    } 

    const handleClick = async () => {

        setPending(true)

        const tasksToSave = [...state, { title: individualTask, status: false }]
        setState([...state, { title: individualTask, status: false }])
        setIndividualTask("")

        try {
            const response = await addSubTask({
                task_id,
                sub_tasks: tasksToSave
            })

            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }

        setPending(false)
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
                        <div className="sub-task auto-height width-100 flex-center margin-vertical-10" key={x.title} >
                            <div className="auto-height width-10 flex-center margin-vertical-10">
                                <input type="checkbox" value={x.status} onChange={toggleStatus} />
                            </div>
                            <div className="auto-height width-90 flex-start margin-vertical-10">
                                <p>{x.title}</p>
                            </div>
                        </div>
                    )
                })}
                
                <div className="add-task auto-height width-100 flex-center margin-vertical-10">
                    <input className="task-input height-100 width-80" type="text" value={individualTask} onChange={handleChange} />
                    <div className="task-button height-100 width-20 flex-center" onClick={handleClick}>
                        { pending ? <Spinner /> : "Add" }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardSubTasks