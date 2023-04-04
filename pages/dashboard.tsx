
import { useState } from "react"
import Head from "next/head"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react" 

import Router from "next/router"

import { useFetchTasksQuery } from "../features/apiSlice"
import useDispatchStatus from "../lib/hooks/useDispatchStatus"

import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import DashboardCardContainer from "../components/DashboardCardContainer"
import SplashScreen from "../components/SplashScreen"
import PopupContainer from "../elements/PopupContainer"

const Dashboard = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()
    const dispatchStatus = useDispatchStatus()

    if (isLoading) {
        return <SplashScreen />
    }

    if (!user) {
        console.log("No user.");
        return Router.push("/")   
    }

    const { data, isFetching } = useFetchTasksQuery(user.id)
    const [status, setStatus] = useState<boolean>(true)

    if (isFetching) {
        return <SplashScreen />
    }

    if (!data) {
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
                { !data ? null :
                <DashboardContainer>
                    { !data ? <p>No internet connection. Please connect to the internet and try again.</p> : null }
                    { data.length < 1 ? <p className="width-80 flex-center margin-vertical-50">You haven't added any tasks yet.</p> : null }
                    { status ?
                     <>
                        <DashboardCardContainer status="Backlog" data={data} />
                        <DashboardCardContainer status="In progress" data={data} />
                        <DashboardCardContainer status="Paused" data={data} />
                    </> : 
                    <DashboardCardContainer status="Completed" data={data} /> }
                    
                </DashboardContainer> }
                <PopupContainer />
            </>
        )
}

export default Dashboard