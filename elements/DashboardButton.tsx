
type Props = {
    content: string
}

const DashboardButton = ({ content }: Props) => {
    return (
        <button className="dashboard-button width-100 margin-vertical-30">{content}</button>
    )
}

export default DashboardButton