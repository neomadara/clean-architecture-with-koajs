import Router from "koa-router"
import {Context} from "koa";
import {TodoController} from "./controller";

const router = new Router()

router.get('/', (ctx) => ctx.body = {message: 'hello world'})
router.post('/todos', (ctx: Context): Promise<void> => new TodoController().createTodo(ctx))

export default router
