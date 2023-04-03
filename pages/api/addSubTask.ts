
import express from "express"
import { supabase } from "../../lib/supabase/supabaseClient"

const app = express()

const handler = async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const { title, status, task_id, user_id } = req.body

    try {

        const { data, error } = await supabase.from("sub_tasks").insert({
            title,
            status,
            parent_task: task_id,
            user: user_id
        })

        res.send({ data, error })

    } catch (error) {
        
        res.send(400)
    }
    
}

export default handler