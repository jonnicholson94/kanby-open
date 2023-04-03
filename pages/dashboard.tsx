
import { useState } from "react"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react" 

import { Helmet } from "react-helmet"

import Router from "next/router"

import { useFetchTasksQuery } from "../features/apiSlice"

import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import DashboardCardContainer from "../components/DashboardCardContainer"
import SplashScreen from "../components/SplashScreen"
import PopupContainer from "../elements/PopupContainer"

const Dashboard = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()

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

    return (
            <>
                <Helmet>
                    <title>
                        Dashboard | Kanby
                    </title>
                </Helmet>
                <GlobalHeader url="/create-task" link="Create task" />
                <DashboardSelector state={status} setState={setStatus} />
                <DashboardContainer>
                    { data.length < 1 ? <p className="width-80 flex-center margin-vertical-50">You haven't added any tasks yet.</p> : null }
                    { status ?
                     <>
                        <DashboardCardContainer status="Backlog" data={data} />
                        <DashboardCardContainer status="In progress" data={data} />
                        <DashboardCardContainer status="Paused" data={data} />
                    </> : 
                    <DashboardCardContainer status="Completed" data={data} /> }
                    
                </DashboardContainer>
                <PopupContainer />
            </>
        )
}

export default Dashboard