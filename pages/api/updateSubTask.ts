

import express from "express"
import { supabase } from "../../lib/supabase/supabaseClient"

const app = express()

const handler = async (req, res) => {
    res.setHeader("Content-Type", "application/json")

    const { sub_task_id, status, title } = req.body

    try {

        const { data, error } = await supabase.from("sub_tasks").update({ 
            status
         }).eq( "id", sub_task_id )
        
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