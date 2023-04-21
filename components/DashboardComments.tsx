
import { useState } from "react"
import moment from "moment"

import { useSaveCommentMutation } from "../features/apiSlice"

import DashboardFormLabel from "../elements/DashboardFormLabel"
import Spinner from "../elements/Spinner"
import { TaskComment } from "../types/dataSchema"

import { Roboto } from 'next/font/google'
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

type Props = {
    task_id: string | string[],
    comments: TaskComment[],
    setComments: React.Dispatch<React.SetStateAction<TaskComment[]>>
}

const DashboardComments = ({ task_id, comments, setComments }: Props) => {

    const supabase = useSupabaseClient()

    // The comment state is used to control a new comment that the user types in.

    const [comment, setComment] = useState<string>("")

    // The pending state is used to control a button, and indicate that an action is occurring, when a user tries to 
    // submit a comment to be saved.

    const [pending, setPending] = useState<boolean>(false)

    // The saveCommentMutation from RTK query is initialised here. This submits a comment to the /api route to be saved.

    const [saveComment] = useSaveCommentMutation()

    // A function used to update the new comment state, which is input by a user into a textarea input.

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setComment(e.target.value)

    }

    // The saveComments function pushes a new comment to the /api route, updates it in the database, and then 
    // updates the state locally for the parent comment state, which is passed in via props by the parent page.

    const saveComments = async () => {

        // Sets the pending state to true, to indicate a network request has been started.

        setPending(true)

        // Creates a new 'comment', by passing in the new comment state, and generating a new date, into a variable.

        const commentToAdd: TaskComment = {
            comment: comment,
            commentDate: new Date().toDateString()
        }

        // A new array is then created, passing in the original comments array, and appending the comment created before
        // into the new array. This array is then passed to the /api endpoint to update the comments stored in the 
        // database once submitted.

        const commentsArrayToPush = [...comments, commentToAdd]
        

        // The API call is then submitted in a try / catch block. It passes in the task_id, so it can identify which task
        // to update, and passes comments in using the newly declared variable mentioned above.

        try {
            const { data, error } = await supabase.from("tasks").update({ comments: commentsArrayToPush }).eq( "id", task_id )

            // Once the request has been completed, pending is set to false, and then the state is updated, to reflect
            // the changes that the user has made.

            setPending(false)
            setComments([...comments, commentToAdd])
            setComment("")
            
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <DashboardFormLabel label="Comments" />
            { comments.length > 0 && comments.map(x => {
                return (
                    <div className="auto-height width-95 flex-column margin-top-20">
                        <p className="comment-date">{moment(x.commentDate).format("DD MMM YYYY")}</p>
                        <p className="comment margin-top-10">{x.comment}</p>
                    </div>
                )
            })}
            <textarea className={`comment-textarea width-95 ${roboto.className}`} placeholder="Add comment" value={comment} onChange={handleChange} />
            <div className="auto-height width-95 flex-end">
                <button className="action-button margin-vertical-10" onClick={saveComments} disabled={ comment.length < 1 ? true : false }>{ pending ? <Spinner /> : "Save comment" }</button>
            </div>                
        </>
    )
}

export default DashboardComments