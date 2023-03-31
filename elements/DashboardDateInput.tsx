import DashboardFormLabel from "./DashboardFormLabel"

type Props = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardDateInput = ({ state, setState }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    return (
        <div className="auto-height width-80 flex-around margin-top-20 ">
            <div className="auto-height width-47 flex-start">
                <label className="width-100">Due date</label>
            </div>
            <div className="auto-height width-47 flex-start">
                <input className="date-input width-100 margin-vertical-10" type="date" value={state} onChange={handleChange} />
            </div>
        </div>
            
    )
}

export default DashboardDateInput