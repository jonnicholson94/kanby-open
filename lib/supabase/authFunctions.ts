
import { supabase } from "./supabaseClient"

export const signup = async (email: string, password: string) => {

   const { data, error } = await supabase.auth.signUp({email, password}) 

   return { data, error }

}

export const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email, password
    })

    return { data, error }

}

export const forgotPassword = async (email: string) => {
    const {data, error} = await supabase.auth.resetPasswordForEmail(email)

    return { data, error }

}