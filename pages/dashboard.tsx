
import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { useFetchTasksQuery } from "../features/apiSlice"

import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import DashboardCardContainer from "../components/DashboardCardContainer"
import Spinner from "../elements/Spinner"

const Dashboard = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()
    const router = useRouter()

    if (isLoading) {
        return
    }

    if (!user) {
        return router.push("/")
    }

    const { data, isFetching, error } = useFetchTasksQuery(user.id)
    

    if (isFetching) {
        return (
        <div className="height-100 width-100 flex-center">
            <Spinner />
        </div>
        )
    }

    if (data) {
        return (
            <>
                <GlobalHeader url="/create-task" link="Create task" />
                <DashboardSelector />
                <DashboardContainer>
                    <DashboardCardContainer status="Backlog" data={data} />
                    <DashboardCardContainer status="In progress" data={data} />
                    <DashboardCardContainer status="Paused" data={data} />
                </DashboardContainer>
            </>
        )
    }
}

export default Dashboard