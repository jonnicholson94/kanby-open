
import { useState } from "react"
import moment from "moment"

import DashboardFormLabel from "../elements/DashboardFormLabel"

import { useSaveCommentMutation } from "../features/apiSlice"
import Spinner from "../elements/Spinner"

const DashboardComments = ({ task_id, comments, setComments }) => {

    const [comment, setComment] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)

    const [saveComment] = useSaveCommentMutation()

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setComment(e.target.value)

    }

    const saveComments = async () => {

        setPending(true)
        setComment("")

        // Set state using spread, and defining a comment based upon certain details

        const commentToAdd = {
            comment: comment,
            commentDate: new Date().toLocaleDateString()
        }

        const commentsArrayToPush = [...comments, commentToAdd]

        setComments([...comments, commentToAdd])

        // try / catch to push new variable to database

        try {
            const response = await saveComment({
                task_id: task_id,
                comments: commentsArrayToPush
            })

            setPending(false)
            
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
                        <DashboardFormLabel label="Comments" />
                        { comments.length > 0 && comments.map(x => {
                            return (
                                <div className="auto-height width-100 flex-column margin-vertical-10">
                                    <p className="comment-date">{moment(x.commentDate).format("DD MMM YYYY")}</p>
                                    <p className="comment">{x.comment}</p>
                                </div>
                            )
                        })}
                        <textarea className="comment-textarea width-100" placeholder="Add comment" value={comment} onChange={handleChange} />
                        <button className="comment-button width-100 margin-vertical-10" onClick={saveComments}>{ pending ? <Spinner /> : "Save comment" }</button>
                    </>
    )
}

export default DashboardComments