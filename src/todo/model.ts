import {model, Schema, Model} from "mongoose";
import {TodoEntity} from "./entity";

const todoSchema = new Schema <TodoEntity>(
    {
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    }
)

export const TodoModel = model<TodoEntity, Model<TodoEntity, {}>>("Todo", todoSchema);
