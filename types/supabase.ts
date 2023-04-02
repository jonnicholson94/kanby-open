export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          category: string
          comments: Json[] | null
          created_at: string | null
          description: string
          due_date: string | null
          id: number
          status: string
          sub_tasks: Json[] | null
          title: string
          user_id: string
        }
        Insert: {
          category: string
          comments?: Json[] | null
          created_at?: string | null
          description: string
          due_date?: string | null
          id?: number
          status: string
          sub_tasks?: Json[] | null
          title: string
          user_id: string
        }
        Update: {
          category?: string
          comments?: Json[] | null
          created_at?: string | null
          description?: string
          due_date?: string | null
          id?: number
          status?: string
          sub_tasks?: Json[] | null
          title?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
