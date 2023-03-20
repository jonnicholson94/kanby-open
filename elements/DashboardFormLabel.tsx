
type Props = {
    label: string
}

const DashboardFormLabel = ({ label }: Props) => {
    return (
        <label className="width-100">{label}</label>
    )
}

export default DashboardFormLabel