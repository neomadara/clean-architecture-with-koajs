import LoggerUtils from "../utils/logger"

const logger = LoggerUtils.logger(__filename)

export default (app) => {
    app.use(async (ctx, next) => {
        if (ctx.url === '/health') {
            await next()
            return
        }
        const start = Date.now()
        logger.info('X-Request-Start', {
            method: ctx.method,
            url: ctx.url,
            start
        })

        await next()

        const ms = Date.now() - start

        logger.info('X-Request-End', {
            method: ctx.method,
            url: ctx.url,
            executionTime: `${ms}ms`,
            httpStatus: ctx.response.res.statusCode,
        })
        ctx.set('X-Response-Time', `${ms}ms`)
    })
}
