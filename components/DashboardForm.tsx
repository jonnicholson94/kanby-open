
const DashboardForm = ({ children }) => {
    return (
        <form className="auto-height width-50 flex-center flex-column margin-vertical-50">
            {children}
        </form>
    )
}

export default DashboardForm