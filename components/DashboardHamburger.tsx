
import DashboardStatus from "../elements/DashboardStatus"
import DashboardCategory from "../elements/DashboardCategory"

const DashboardHamburger = ({ setShow, status, setStatus, category, setCategory }) => {

    return (
        <>
            <div className="dashboard-hamburger-blocker" onClick={() => setShow(false)}></div>
            <div className="dashboard-hamburger width-80 flex-start flex-column relative">
                <DashboardStatus state={status} setState={setStatus} />
                <DashboardCategory state={category} setState={setCategory} />
            </div>
        </>
    )
}

export default DashboardHamburger