
import { data } from "../data"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import DashboardCardContainer from "../components/DashboardCardContainer"
import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import Spinner from "../elements/Spinner"

const Completed = () => {

    const { isLoading } = useSessionContext()
    const user = useUser()
    const router = useRouter()

    if (isLoading) {
        return (
            <div>
                <Spinner />
            </div>
        )
    }

    if (!user) {
        router.push("/")
    }

    return (
        <>  
            <GlobalHeader link="Create task" url="/create-task" />
            <DashboardSelector />
            <DashboardContainer>
                <DashboardCardContainer status="Completed" data={data} />
            </DashboardContainer>
        </>
    )
}

export default Completed