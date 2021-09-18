import {TodoModel} from "../model";
import {Todo} from "../interface";

export const create = async (todo: Todo) => {
    await TodoModel.create(todo)
}
