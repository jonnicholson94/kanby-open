
type Props = {
    children: React.ReactFragment
}

const DashboardContainer = ({ children }: Props) => {
    return (
        <section className="auto-height width-100 flex-center flex-column relative">
            <div className="auto-height width-100 flex-center flex-column">
                {children}
            </div>
        </section>
    )
}

export default DashboardContainer