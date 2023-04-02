
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import { calculateColour } from "../lib/calculateColour"
import { Category } from "../types/dataSchema"

type Props = {
    category: Category,
    selected?: boolean,
    onClick: Function
}

const CategoryButton = ({ category, selected, onClick }: Props) => {
    return (
        <div className="dashboard-selected width-100 flex-center" onClick={() => onClick(category)}>
            <div className="height-100 width-47 flex-start">
                <span className="category-span margin-right-10 margin-left-10" style={{backgroundColor: calculateColour(category)}}></span>
                <p>{category}</p>
            </div>
            <div className="height-100 width-47 flex-end margin-right-10">
                { !selected ? null : <FontAwesomeIcon icon={faChevronDown} /> }
            </div>
        </div>
    )
}

export default CategoryButton