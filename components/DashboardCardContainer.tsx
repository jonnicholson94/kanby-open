
import { useMemo } from "react"

import DashboardHeading from "../elements/DashboardHeading"
import DashboardCard from "../elements/DashboardCard"

import { Category, Status, Task } from '../types/dataSchema'

import { filteredData } from "../lib/filteredData"

type Props = {
    status: Status,
    data: Task[]
}

const DashboardCardContainer = ({ status, data }: Props) => {

    // useMemo for the loop which is called upon render.
    // The loop takes in two parameters: the data, and the filter to apply. 

    const cardList = useMemo(
        () => filteredData(status, data), [status, data]
    )

    return (
        <>
        <DashboardHeading title={status} />
        { cardList.map(x => {
            return <DashboardCard id={x.id} title={x.title} category={x.category as Category} date={x.dueDate} />
        })}
        </>
    )
}

export default DashboardCardContainer