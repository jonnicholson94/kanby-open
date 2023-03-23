
import DashboardFormLabel from "../elements/DashboardFormLabel"

const DashboardComments = () => {
    return (
        <>
                        <DashboardFormLabel label="Comments" />
                        <div className="auto-height width-100 flex-column margin-vertical-10">
                            <p className="comment-date">23rd March 2023</p>
                            <p className="comment">An example comment goes right here, amazing!</p>
                        </div>
                        <div className="auto-height width-100 flex-column margin-vertical-10">
                            <p className="comment-date">23rd March 2023</p>
                            <p className="comment">An example comment goes right here, amazing!</p>
                        </div>
                        <textarea className="comment-textarea width-100" placeholder="Add comment" />
                        <button className="comment-button width-100 margin-vertical-10">Save comment</button>
                    </>
    )
}

export default DashboardComments