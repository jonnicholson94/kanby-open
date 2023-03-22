import DashboardFormLabel from "../elements/DashboardFormLabel"

type Props = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardTitle = ({ state, setState }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setState(e.target.value)

    }

    return (
        <>
            <DashboardFormLabel label="Title" />
            <input className="title-input width-100 margin-vertical-10" type="text" value={state} onChange={handleChange} />
        </>
    )
}

export default DashboardTitle