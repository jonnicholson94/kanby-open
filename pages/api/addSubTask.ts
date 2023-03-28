
import express from "express"
import { supabase } from "../../lib/supabase/supabaseClient"

const app = express()

const handler = async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const { task_id, sub_tasks } = req.body

    try {

        const { data, error } = await supabase.from("tasks").update({ sub_tasks: sub_tasks }).eq( "id", task_id )
        
        if (error) {
            
            res.send(400)
        }

        else {
            res.send(200)
        }

    } catch (error) {
        
        res.send(400)
    }
    
}

export default handler