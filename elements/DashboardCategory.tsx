
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import { calculateColour } from "../lib/calculateColour"
import DashboardFormLabel from "./DashboardFormLabel"

const DashboardCategory = () => {
    return (
        <>
            <DashboardFormLabel label="Category" />
            <div className="dashboard-select-container width-100 margin-vertical-10">
                <button className="dashboard-selected width-100 flex-center">
                    <div className="height-100 width-47 flex-start">
                        <span className="category-span margin-right-10" style={{backgroundColor: calculateColour("Life")}}></span>
                        <p>Life</p>
                    </div>
                    <div className="height-100 width-47 flex-end">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </button>
                <div className="auto-height width-100 flex-center flex-column">
                    <button className="dashboard-selected dropdown width-100 flex-center">
                        <div className="flex-start width-47">
                            <span className="category-span margin-right-10" style={{backgroundColor: calculateColour("Learning")}}></span>
                            <p>Learning</p>
                        </div>
                        <div className="width-47"></div>
                    </button>
                </div>
            </div>
            </>
    )
}

export default DashboardCategory