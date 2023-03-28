
import express from "express"
import { supabase } from "../../lib/supabase/supabaseClient"

const app = express()

const handler = async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const { task_id, title, description, status, category, due_date } = req.body

    try {

        const { data, error } = await supabase.from("tasks").update({ 
            title,
            description,
            status,
            category,
            due_date
         }).eq( "id", task_id )
        
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