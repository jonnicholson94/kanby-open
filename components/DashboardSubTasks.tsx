
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
        
        setIndividualTask("")

        try {
            const response = await addSubTask({
                task_id,
                sub_tasks: tasksToSave
            })

            console.log(response);
            setState([...state, { title: individualTask, status: false }])
            
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
            <div className="auto-height width-95 flex-center flex-column margin-vertical-10">
                { state.map(x => {
                    return (
                        <div className="sub-task auto-height width-100 flex-center margin-top-10" key={x.title} >
                            <div className="sub-task-check auto-height width-5 flex-center margin-vertical-10">
                                <input type="checkbox" value={x.status} onChange={toggleStatus} />
                            </div>
                            <div className="auto-height width-95 flex-start margin-vertical-10">
                                <p>{x.title}</p>
                            </div>
                        </div>
                    )
                })}
                
                <div className="auto-height width-100 flex-center flex-column margin-vertical-10">
                    <input className="standard-input height-100 width-100" type="text" value={individualTask} onChange={handleChange} placeholder="Add sub-task" />
                    <div className="auto-height width-100 flex-end">
                        <button className="action-button height-100 flex-center margin-top-20" onClick={handleClick} disabled={ individualTask.length < 1 ? true : false }>
                            { pending ? <Spinner /> : "Add" }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardSubTasks