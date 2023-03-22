
import { useState } from "react"

import DashboardFormLabel from "./DashboardFormLabel"
import CategoryButton from "./CategoryButton"

import { Category } from "../types/dataSchema"

type Props = {
    state: Category,
    setState: React.Dispatch<React.SetStateAction<Category>>
}

const DashboardCategory = ({ state, setState }: Props) => {

    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    const handleClick = (category) => {
        setState(category)
        setActive(false)
    }

    return (
        <>
            <DashboardFormLabel label="Category" />
            <div className="dashboard-select-container width-100 margin-vertical-10">
                <CategoryButton category={state} selected={true} onClick={toggleActive} />

                { active ?
                <div className="auto-height width-100 flex-center flex-column">
                    <CategoryButton category="General" selected={false} onClick={handleClick} />
                    <CategoryButton category="Health" selected={false} onClick={handleClick} />
                    <CategoryButton category="Learning" selected={false} onClick={handleClick} />
                    <CategoryButton category="Life" selected={false} onClick={handleClick} />
                    <CategoryButton category="Work" selected={false} onClick={handleClick} />
                </div> : null }
            </div>
            </>
    )
}

export default DashboardCategory