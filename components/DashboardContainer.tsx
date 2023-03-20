
const DashboardContainer = ({ children }) => {
    return (
        <section className="auto-height width-100 flex-center flex-column">
            <div className="auto-height width-90 flex-center flex-column margin-vertical-50">
                {children}
            </div>
        </section>
    )
}

export default DashboardContainer