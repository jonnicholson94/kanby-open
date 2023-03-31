
type Props = {
    title: string
}

const DashboardHeading = ({ title }: Props) => {
    return (
        <div className="dashboard-heading auto-height width-100 flex-center">
            <h5 className="width-95 margin-vertical-10 margin-left-20">{title}</h5>
        </div>
    )
}

export default DashboardHeading