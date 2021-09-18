import Application, {Context} from "koa";
import {create} from "../infrastructure/repository";
import {createTodoSchema} from "../dto/createTodo";

export class TodoController implements TodoControllerImp{
    async createTodo(ctx: Application.Context): Promise<any> {
        const validation = createTodoSchema.parse(ctx.request.body)
        const rs = create(validation)
        setHttpResponse(ctx, rs, 201)
    }
}

const setHttpResponse = (ctx: Context, body: object, status: number) => {
    ctx.response.body = body;
    ctx.response.status = status
}

interface TodoControllerImp {
    createTodo: (ctx: Context) => Promise<any>
}
