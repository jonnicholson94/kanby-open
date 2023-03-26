
import Spinner from "./Spinner"

type Props = {
    content: string,
    pending: boolean
}

const DashboardButton = ({ content, pending }: Props) => {
    return (
        <button className="dashboard-button width-100 margin-vertical-30" disabled={pending}>
            { pending ? <Spinner /> : content }
        </button>
    )
}

export default DashboardButton