
import DashboardFormLabel from "./DashboardFormLabel"

type Props = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardTextarea = ({ state, setState }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setState(e.target.value)

    }

    return (
        <>
            <DashboardFormLabel label="Description" />
            <textarea className="dashboard-textarea width-100 margin-vertical-10" value={state} onChange={handleChange} />
        </>
    )
}

export default DashboardTextarea