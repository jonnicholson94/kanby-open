
import { data } from "../data"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import DashboardCardContainer from "../components/DashboardCardContainer"

const Dashboard = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()
    const router = useRouter()

    if (isLoading) {
        return
    }

    if (!user) {
        router.push("/")
    }

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

export default Dashboard