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
        <>
            <DashboardFormLabel label="Due date" />
            <input className="date-input width-100 margin-vertical-10" type="date" value={state} onChange={handleChange} />
        </>
    )
}

export default DashboardDateInput