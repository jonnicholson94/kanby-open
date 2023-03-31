
type Props = {
    label: string
}

const DashboardFormLabel = ({ label }: Props) => {
    return (
        <label className="bold width-95 margin-top-30">{label}</label>
    )
}

export default DashboardFormLabel