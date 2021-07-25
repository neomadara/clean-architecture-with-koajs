import cors from "@koa/cors"
import bodyParser from "koa-bodyparser"
import helmet from "koa-helmet"
import respond from "koa-respond"
import timer from "./timingLogger"

function apply(api) {
    api.use(respond())
    api.use(helmet())
    timer(api)
    api.use(cors())
    api.use(bodyParser({
        enableTypes: ['json'],
        jsonLimit: '5mb',
        strict: true,
        onerror(_, ctx) {
            ctx.throw(422, 'Body parser error')
        }
    }))
}

export default apply
