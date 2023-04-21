
import { useState } from "react"
import Head from "next/head"

import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/router"

import { useFetchSingleTaskQuery, useUpdateTaskMutation, useDeleteTaskMutation, useFetchSubTasksQuery } from "../../features/apiSlice"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import useDispatchStatus from "../../lib/hooks/useDispatchStatus"

import DashboardContainer from "../../components/DashboardContainer"
import DashboardTitle from "../../components/DashboardTitle"
import DashboardBackButton from "../../elements/DashboardBackButton"
import DashboardTextarea from "../../elements/DashboardTextarea"
import DashboardComments from "../../components/DashboardComments"
import DashboardStatus from "../../elements/DashboardStatus"
import DashboardSubTasks from "../../components/DashboardSubTasks"
import DashboardCategory from "../../elements/DashboardCategory"
import DashboardDateInput from "../../elements/DashboardDateInput"

import { TaskComment, Category, Status, SubTask } from "../../types/dataSchema"
import PopupContainer from "../../elements/PopupContainer"
import DashboardHamburger from "../../components/DashboardHamburger"
import AlertPopup from "../../elements/AlertPopup"
import { useSupabaseClient } from "@supabase/auth-helpers-react"



const ViewTask = ({ user, task, sub_tasks, task_id }) => {

    const router = useRouter()

    const dispatchStatus = useDispatchStatus()
    const supabase = useSupabaseClient()

    const [updateTask] = useUpdateTaskMutation()
    const [deleteTask] = useDeleteTaskMutation()

    const [title, setTitle] = useState<string>(task[0].title)
    const [description, setDescription] = useState<string>(task[0].description)
    const [status, setStatus] = useState<Status>(task[0].status)
    const [subTasks, setSubTasks] = useState<SubTask[] | undefined[]>(sub_tasks)
    const [category, setCategory] = useState<Category>(task[0].category)
    const [date, setDate] = useState<string>(task[0].due_date)
    const [comments, setComments] = useState<TaskComment[]>(task[0].comments)

    const [pending, setPending] = useState<boolean>(false)

    const [show, setShow] = useState(null)

    const handleTaskUpdate = async () => {

        setPending(true)

        try {
            const { data, error } = await supabase.from("tasks").update({ 
                title,
                description,
                status,
                category,
                due_date: date
             }).eq( "id", task_id )

            dispatchStatus("Successfully updated your task", "success")

            console.log(data);
            
        } catch (error) {
            console.log(error);
            dispatchStatus(error, "error")

        }

        setPending(false)

    }

    const handleTaskDelete = async () => {

        try {
            const { data, error} = await supabase.from("tasks").delete().eq("id", task_id)

            if (data) {

                dispatchStatus("Successfully updated your task", "success")
    
                console.log(data);

                router.push("/dashboard")
            }

        } catch (error) {
            console.log(error);

            dispatchStatus(error, "error")
            
        }
    }
        

    return (
            <>
            <Head>
                <title>
                    View your task | Kanby
                </title>
            </Head>
            <DashboardContainer>
                <DashboardBackButton showSaveButton={true} onClick={handleTaskUpdate} pending={pending} showHamburger={setShow} state={title} />
                <div className="view-task-container auto-height width-100 flex-around-start">
                    <div className="view-task-left width-65 flex-center flex-column">
                        <DashboardTitle state={title} setState={setTitle} />
                        <DashboardTextarea state={description} setState={setDescription} />
                        <DashboardSubTasks state={subTasks} setState={setSubTasks} user_id={user.id} task_id={task_id} />
                        <DashboardComments task_id={task_id} comments={comments} setComments={setComments} />
                    </div>
                    <div className="view-task-right auto-height width-35 flex-start flex-column relative">
                        <div className="auto-height width-80 flex-start margin-vertical-30">
                            <AlertPopup title="Are you sure you want to delete this task?" description="Once you do, you won't be able to get it back." onClick={handleTaskDelete}>
                                <FontAwesomeIcon icon={faTrash} />
                            </AlertPopup>
                        </div>
                        <DashboardStatus state={status} setState={setStatus} />
                        
                        <DashboardCategory state={category} setState={setCategory} />
                        <DashboardDateInput state={date} setState={setDate} />
                    </div>
                </div>
            <PopupContainer />
            <DashboardHamburger show={show} setShow={setShow} status={status} setStatus={setStatus} category={category} setCategory={setCategory} task_id={task_id} type="view" />
            </DashboardContainer>
            </>
        )
}

export default ViewTask

export const getServerSideProps = async (ctx) => {

    const supabase = createServerSupabaseClient(ctx)

    const { task_id } = ctx.query
    
    const {
      data: { session },
    } = await supabase.auth.getSession()
  
    if (!session)
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }

    const { data: task, error: task_error } = await supabase.from("tasks").select("*").eq("id", task_id)
    const { data: sub_tasks, error: sub_tasks_error } = await supabase.from("sub_tasks").select("*").eq("parent_task", task_id)
  
    return {
      props: {
        initialSession: session,
        user: session.user,
        task: task,
        error: task_error,
        sub_tasks: sub_tasks,
        sub_task_error: sub_tasks_error,
        task_id: task_id
      },
    }
  }