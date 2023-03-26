
import { useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"

import { useFetchTasksQuery } from "../features/apiSlice"

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
                <GlobalHeader link="Create task" url="/create-task" />
                <DashboardSelector />
                <DashboardContainer>
                    <DashboardCardContainer status="Completed" data={data} />
                </DashboardContainer>
            </>
        )
    }
}

export default Completed