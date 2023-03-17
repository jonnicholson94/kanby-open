import DashboardSelector from "../components/DashboardSelector"
import GlobalHeader from "../components/GlobalHeader"
import Column from "../elements/Column"

import Card from "../elements/Card"

const Dashboard = () => {
    return (
        <>
            <GlobalHeader />
            <DashboardSelector />
            <div className="auto-height width-95 flex-around flex-scroll">
                <Column />
                <Column />
                <Column />
            </div>
            
        </>
    )
}

export default Dashboard