
import { useState, useEffect } from 'react'

import DashboardSelectorToggle from "../elements/DashboardSelectorToggle"

const DashboardSelector = () => {

    const [active, setActive] = useState<string>('')

    useEffect(() => {
        setActive(window.location.pathname)
    }, [])
    
    return (
        <div className="auto-height width-100 flex-center">
            <DashboardSelectorToggle active={active} href="/dashboard" content="Dashboard" />
            <DashboardSelectorToggle active={active} href="/completed" content="Completed" />
        </div>
    )
}

export default DashboardSelector