import Application from "koa";
import { Server } from "http"

import * as app from "./app"

const port = process.env.PORT || 3000
let apiUsingPort: Server


app.setupApp(true)
    .then((api: Application) => {
        apiUsingPort = api.listen(3000, () => {
            // TODO: logger pending
            console.log(`API server started on port ${port}`)
        })
    })
    .catch((err: Error) => {
        // TODO: logger pending
        console.log(err.message)
        process.exit(1)
    })

process.on('SIGTERM', () => {
    apiUsingPort.close()
    app.tearDownApp()
        .then(() => {
            // TODO: logger pending
            console.log('Server received SIGTERM. Graceful shutdown successfully')
            process.exit(0)
        })
        .catch((err: Error) => {
            // TODO: logger pending
            console.log('Server received SIGTERM. Exit with errors', { errorMessage: err.message})
            process.exit(1)
        })
})
