import { Document } from "mongoose"

export interface TodoEntity extends Document{
    id: String
    title: String
    completed: Boolean
}
