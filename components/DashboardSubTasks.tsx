
import { useState } from 'react'

import DashboardFormLabel from "../elements/DashboardFormLabel"
import Spinner from '../elements/Spinner'
import { SubTask } from "../types/dataSchema"
import { useSupabaseClient } from '@supabase/auth-helpers-react'

type Props = {
    state: SubTask[] | undefined[],
    setState: React.Dispatch<React.SetStateAction<SubTask[] | undefined[]>>,
    user_id: string | string[],
    task_id?: string | string[]
}

const DashboardSubTasks = ({ state, setState, user_id, task_id }: Props) => {

    const supabase = useSupabaseClient()

    const [individualTask, setIndividualTask] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)

    const handleClick = async () => {

        setPending(true)

        try {

            const { data, error } = await supabase.from("sub_tasks").insert({
                title: individualTask,
                status: false,
                parent_task: task_id,
                user: user_id
            }).select()

            const newState = [...state, { id: data[0].id, title: data[0].title, status: data[0].status, parent_task: data[0].parent_task, user: data[0].user }]

            setIndividualTask("")
            setState(newState)
            setPending(false)
            
        } catch (error) {
            console.log(error);
            setPending(false)
            
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIndividualTask(e.target.value)
    }

    const toggleStatus = async (selected_id) => {

        const task = state.filter((x: SubTask) => {
            if (x) {
                return x.id === selected_id
            }
            
        })

        let newStatus: boolean 

        if (task[0].status === true) {
            newStatus = false
        } else {
            newStatus = true
        }

        const newState = state.map(x => x.id === selected_id ? { ...x, status: newStatus } : x )
        
        setState(newState)

        try {
            const { data, error } = await supabase.from("sub_tasks").update({ 
                status: newStatus
             }).eq( "id", selected_id ).select()

             console.log(data);
             

             
        } catch (error) {

            console.log(error);
            
        }
        
    }

    return (
        <>
            <DashboardFormLabel label="Sub tasks" />
            <div className="auto-height width-95 flex-center flex-column margin-vertical-10">
                { state.map(x => {
                    return (
                        <div className="sub-task auto-height width-100 flex-center margin-top-10" key={x.id} onClick={() => toggleStatus(x.id)}>
                            <div className="sub-task-check auto-height width-5 flex-center margin-vertical-10">
                                <input type="checkbox" checked={x.status} />
                            </div>
                            <div className="auto-height width-95 flex-start margin-vertical-10">
                                <p className={x.status === true ? "strikethrough" : ""}>{x.title}</p>
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