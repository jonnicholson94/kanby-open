
type Props = {
    title: string
}

const DashboardHeading = ({ title }: Props) => {
    return (
        <div className="auto-height width-100 flex-center">
            <h2 className="width-95 margin-vertical-10">{title}</h2>
        </div>
    )
}

export default DashboardHeading