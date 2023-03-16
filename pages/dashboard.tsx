import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"

import Card from "../elements/Card"

const Dashboard = () => {
    return (
        <>
            <GlobalHeader />
            <DashboardSelector />

            <Card />
        </>
    )
}

export default Dashboard