import * as Select from '@radix-ui/react-select';

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

import { Status } from "../types/dataSchema"

type Props = {
    state: Status,
    setState: React.Dispatch<React.SetStateAction<Status>>
}

const DashboardStatus = ({ state, setState }: Props) => {

    const handleClick = (value) => {

        setState(value)

    }

    return (
        <div className="auto-height width-80 flex-around margin-top-20 ">
            <div className="auto-height width-47 flex-start">
                <label className="width-100">Status</label>
            </div>
            <div className="auto-height width-47 flex-start">
                <Select.Root onValueChange={handleClick}>
                    <Select.Trigger className="status-trigger width-100 flex-start">
                        <Select.Value>{state}</Select.Value>
                    </Select.Trigger>
                
                        <Select.Portal className={`${roboto.className}`}>
                            <Select.Content className="status-portal" position={'popper'}>
                                <Select.Viewport className="status-view height-100 flex-center flex-column">
                                    <Select.Group className="height-90 width-90 flex-center flex-column margin-vertical-20">
                                        <Select.SelectItem className="status-select flex-start width-100" value="Backlog">Backlog</Select.SelectItem>
                                        <Select.SelectItem className="status-select flex-start width-100" value="In progress">In progress</Select.SelectItem>
                                        <Select.SelectItem className="status-select flex-start width-100" value="Paused">Paused</Select.SelectItem>
                                        <Select.SelectItem className="status-select flex-start width-100" value="Completed">Completed</Select.SelectItem>
                                    </Select.Group>
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Portal>
                </Select.Root>
            </div>
        </div>
    )
}

export default DashboardStatus