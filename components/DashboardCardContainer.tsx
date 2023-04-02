
// useMemo is used to memoise the card lists between renders. Since the data is being sorted through to break down into groups,
// based upon the data's status, it makes sense to memoise this if the data doesn't change between renders.

import { useMemo } from "react"

import DashboardHeading from "../elements/DashboardHeading"
import DashboardCard from "../elements/DashboardCard"

// Importing data types here, to be used to strongly control what properties I expect each component to need, and be able to 
// change.

import { Category, Status, Task } from '../types/dataSchema'

// A lib function used to filter down the data based upon their status.

import { filteredData } from "../lib/filteredData"

// Status is passed in by the parent component to determine what type of task should be rendered. The data is an array of type
// 'Task'. 

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

            { /* An initial check is made to ensure that the filtered list has a length of greater than 0. */ }

            { cardList.length > 0 ?
            <>
            <DashboardHeading title={status} />

            { /* The filtered list is then mapped through, passing in each of the details to the child component. */}

            { cardList.map(x => {
                
                return <DashboardCard key={x.id} id={x.id} title={x.title} category={x.category as Category} date={x.due_date} />
            })}
            </> : null }
        </>
    )
}

export default DashboardCardContainer