
import * as Select from '@radix-ui/react-select';

import { Category } from "../types/dataSchema"

import { calculateColour } from "../lib/calculateColour";

type Props = {
    state: Category,
    setState: React.Dispatch<React.SetStateAction<Category>>
}

const DashboardCategory = ({ state, setState }: Props) => {

    const handleClick = (category) => {
        setState(category)
    }

    return (
        <div className="auto-height width-80 flex-around margin-top-20">
            <div className="auto-height width-47 flex-start">
                <label className="width-100">Category</label>
            </div>
            <div className="auto-height width-47 flex-start">
                <Select.Root onValueChange={handleClick}>
                    <Select.Trigger className="status-trigger width-100 flex-start">
                        <Select.Value>{state}
                        </Select.Value>
                    </Select.Trigger>
                
                        <Select.Portal>
                            <Select.Content className="status-portal" position={'popper'}>
                                <Select.Viewport className="status-view height-100 flex-center flex-column">
                                    <Select.Group className="height-90 width-90 flex-center flex-column margin-vertical-20">
                                        <Select.SelectItem className="status-select flex-start width-100" value="General">
                                            <span className="category-span margin-right-10" style={{backgroundColor: calculateColour("General")}}></span>
                                            <p>General</p>
                                        </Select.SelectItem>
                                        <Select.SelectItem className="status-select flex-start width-100" value="Health">
                                            <span className="category-span margin-right-10" style={{backgroundColor: calculateColour("Health")}}></span>
                                            <p>Health</p>
                                        </Select.SelectItem>
                                        <Select.SelectItem className="status-select flex-start width-100" value="Learning">
                                            <span className="category-span margin-right-10" style={{backgroundColor: calculateColour("Learning")}}></span>
                                            <p>Learning</p>
                                        </Select.SelectItem>
                                        <Select.SelectItem className="status-select flex-start width-100" value="Life">
                                            <span className="category-span margin-right-10" style={{backgroundColor: calculateColour("Life")}}></span>
                                            <p>Life</p>
                                        </Select.SelectItem>
                                        <Select.SelectItem className="status-select flex-start width-100" value="Work">
                                            <span className="category-span margin-right-10" style={{backgroundColor: calculateColour("Work")}}></span>
                                            <p>Work</p>
                                        </Select.SelectItem>
                                    </Select.Group>
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Portal>
                </Select.Root>
            </div>
        </div>
    )
}

export default DashboardCategory