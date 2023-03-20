
import { data } from "../data"

import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import DashboardCardContainer from "../components/DashboardCardContainer"

const Dashboard = () => {
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