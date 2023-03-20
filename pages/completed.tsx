
import { data } from "../data"

import DashboardCardContainer from "../components/DashboardCardContainer"
import DashboardContainer from "../components/DashboardContainer"
import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"

const Completed = () => {
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