
import { useState } from "react"
import Head from "next/head"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"

import useDispatchStatus from "../lib/hooks/useDispatchStatus"

import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import DashboardCardContainer from "../components/DashboardCardContainer"
import PopupContainer from "../elements/PopupContainer"

const Dashboard = ({ tasks }) => {

    const dispatchStatus = useDispatchStatus()

    const [status, setStatus] = useState<boolean>(true)

    if (!tasks) {
        dispatchStatus("We couldn't search for your data. Please check your internet connection and try again.", "error")
    }

    return (
            <>
                <Head>
                    <title>
                        Dashboard | Kanby
                    </title>
                </Head>
                <GlobalHeader url="/create-task" link="Create task" />
                <DashboardSelector state={status} setState={setStatus} />
                { !tasks ? null :
                <DashboardContainer>
                    { !tasks ? <p>No internet connection. Please connect to the internet and try again.</p> : null }
                    { tasks.length < 1 ? <p className="width-80 flex-center margin-vertical-50">You haven't added any tasks yet.</p> : null }
                    { status ?
                     <>
                        <DashboardCardContainer status="Backlog" data={tasks} />
                        <DashboardCardContainer status="In progress" data={tasks} />
                        <DashboardCardContainer status="Paused" data={tasks} />
                    </> : 
                    <DashboardCardContainer status="Completed" data={tasks} /> }
                    
                </DashboardContainer> }
                <PopupContainer />
            </>
        )
}

export default Dashboard

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

      const { data, error } = await supabase.from("tasks").select("*").eq("user_id", session.user.id)
  
    return {
      props: {
        initialSession: session,
        user: session.user,
        tasks: data,
        error: error
      },
    }
  }