
import express from "express"
import { supabase } from "../../lib/supabase/supabaseClient"

const app = express()

const handler = async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const { user_id, title, description, due_date, category, status } = req.body

    try {
        
        const { data, error } = await supabase.from("tasks").insert([
            {
                user_id: user_id,
                title: title,
                description: description,
                due_date: due_date,
                category: category,
                status: status,
                comments: []
            }
        ])
        
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