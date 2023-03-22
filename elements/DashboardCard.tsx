
import Link from "next/link"
import moment from "moment"

import { calculateColour } from "../lib/calculateColour"

import { Category } from "../types/dataSchema"

type Props = {
    id: string,
    title: string,
    category: Category,
    date: string
}

const DashboardCard = ({ title, category, date }: Props) => {

    return (
        <Link className="dashboard-card auto-height width-100 flex-center margin-vertical-10" href="">
            <div className="auto-height width-47 flex-start">
                <h3 className="margin-left-10">{title}</h3>
            </div>
            <div className="auto-height width-47 flex-end">
                <div className="auto-height margin-right-30 flex-center">
                    <span className="category-span margin-right-10 flex-center" style={{backgroundColor: calculateColour(category)}}></span>
                    <p>{category}</p>
                </div>
                <div className="auto-height flex-center margin-right-10">
                    <p>{moment(date).format("DD MMM")}</p>
                </div>
            </div>
        </Link>
    )
}

export default DashboardCard