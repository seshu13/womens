export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      activities: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          video_url?: string
          category: 'leadership' | 'team-building' | 'virtual' | 'experiences' | 'speaker'
          badge: string | null
          duration: string | null
          group_size_min: number | null
          group_size_max: number | null
          highlights: string[] | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          video_url?: string
          category: 'leadership' | 'team-building' | 'virtual' | 'experiences' | 'speaker'
          badge?: string | null
          duration?: string | null
          group_size_min?: number | null
          group_size_max?: number | null
          highlights?: string[] | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          video_url?: string
          category?: 'leadership' | 'team-building' | 'virtual' | 'experiences' | 'speaker'
          badge?: string | null
          duration?: string | null
          group_size_min?: number | null
          group_size_max?: number | null
          highlights?: string[] | null
          is_active?: boolean
          created_at?: string
        }
      }
      proposals: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          company_name: string
          preferred_date: string
          number_of_participants: number
          selected_activities: string[]
          message?: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          company_name: string
          preferred_date: string
          number_of_participants: number
          selected_activities: string[]
          message?: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          company_name?: string
          preferred_date?: string
          number_of_participants?: number
          selected_activities?: string[]
          message?: string
          status?: string
          created_at?: string
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
  }
}
