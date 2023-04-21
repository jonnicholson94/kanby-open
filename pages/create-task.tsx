
import { useState } from "react"
import Head from "next/head"

import useDispatchStatus from "../lib/hooks/useDispatchStatus"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { Status, Category } from "../types/dataSchema"

import DashboardContainer from "../components/DashboardContainer"
import DashboardTitle from "../components/DashboardTitle"
import DashboardBackButton from "../elements/DashboardBackButton"
import DashboardCategory from "../elements/DashboardCategory"
import DashboardDateInput from "../elements/DashboardDateInput"
import DashboardStatus from "../elements/DashboardStatus"
import DashboardTextarea from "../elements/DashboardTextarea"
import DashboardHamburger from "../components/DashboardHamburger"

const CreateTask = ({ user }) => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<Status>("Backlog")
    const [category, setCategory] = useState<Category>("General")
    const [date, setDate] = useState<string>()

    const [pending, setPending] = useState<boolean>(false)

    const [show, setShow] = useState(null)

    const dispatchStatus = useDispatchStatus()
    const router = useRouter()
    const supabase = useSupabaseClient()

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault()
        setPending(true)
        
            try {
            
                const { data, error } = await supabase.from("tasks").insert([
                    {
                        user_id: user.id,
                        title: title,
                        description: description,
                        category: category,
                        due_date: date,
                        status: status,
                        comments: []
                    }
                ])

                if (error) {
                    setPending(false)

                    return dispatchStatus("Failed to create your task", "error")
                    
                } 
                
                router.push("dashboard")
                dispatchStatus("Successfully created your task", "success")
                
               
            } catch (error) {
                dispatchStatus("Failed to create your task", "error")
                setPending(false)
            }

            
        }

    return (
        <>
            <Head>
                <title>
                    Create a task | Kanby
                </title>
            </Head>
            <DashboardContainer>
                <DashboardBackButton showSaveButton={true} onClick={handleSubmit} pending={pending} showHamburger={setShow} state={title} />
                <div className="view-task-container auto-height width-100 flex-around-start">
                    <div className="view-task-left width-65 flex-center flex-column">
                        <DashboardTitle state={title} setState={setTitle} />
                        <DashboardTextarea state={description} setState={setDescription} />
                    </div>
                    <div className="view-task-right auto-height width-35 flex-start flex-column relative">
                        <DashboardStatus state={status} setState={setStatus} />
                        
                        <DashboardCategory state={category} setState={setCategory} />
                        <DashboardDateInput state={date} setState={setDate} />
                    </div>
                </div>
                <DashboardHamburger show={show} setShow={setShow} status={status} setStatus={setStatus} category={category} setCategory={setCategory} task_id="" type="create" />
            </DashboardContainer>
        </>
    )
}

export default CreateTask

export const getServerSideProps = async (ctx) => {

    const supabase = createServerSupabaseClient(ctx)
    
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
  
    return {
      props: {
        initialSession: session,
        user: session.user
      },
    }
  }