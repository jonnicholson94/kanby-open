
import { useMemo } from "react"

import DashboardHeading from "../elements/DashboardHeading"
import DashboardCard from "../elements/DashboardCard"

import { Category, Status, Task } from '../types/dataSchema'

import { filteredData } from "../lib/filteredData"

type Props = {
    status: Status,
    data
}

const DashboardCardContainer = ({ status, data }: Props) => {

    // useMemo for the loop which is called upon render.
    // The loop takes in two parameters: the data, and the filter to apply. 

    const cardList = useMemo(
        () => filteredData(status, data), [status, data]
    )
    

    return (
        <>
            { cardList.length > 0 ?
            <>
            <DashboardHeading title={status} />
            { cardList.map(x => {
                console.log(x.due_date);
                
                return <DashboardCard id={x.id} title={x.title} category={x.category as Category} date={x.due_date} />
            })}
            </> : null }
        </>
    )
}

export default DashboardCardContainer