
import express from "express"
import { supabase } from "../../lib/supabase/supabaseClient"

const app = express()

const handler = async (req, res) => {

    const { user_id } = req.query

    try {
        const { data, error } = await supabase.from("tasks").select("*").eq("user_id", user_id)

        if (data) {
            res.status(200).json(data)
        }

        if (error) {
            res.status(400).json(error)
        }
        
    } catch (error) {
        res.send(error)
    }
    
}

export default handler