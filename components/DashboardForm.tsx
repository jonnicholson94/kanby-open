
type Props = {
    children: React.ReactElement,
    handleSubmit: React.Dispatch<React.FormEvent>
}

const DashboardForm = ({ children, handleSubmit }: Props) => {
    return (
        <form className="auto-height width-50 flex-center flex-column margin-vertical-50" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default DashboardForm