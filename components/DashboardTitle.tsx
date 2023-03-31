
type Props = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardTitle = ({ state, setState }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setState(e.target.value)

    }

    return (
        <input className="dashboard-input title width-95 margin-top-30" type="text" value={state} onChange={handleChange} placeholder="Enter a title" />
    )
}

export default DashboardTitle