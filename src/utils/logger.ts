import {createLogger, format, transports} from "winston"

const trackingData = require("../middleware/trackingData")

function logger(module: string) {
    const custom = format((info: any) => ({
        environment: process.env.NODE_ENV,
        XRequestId: trackingData.getRequestId(),
        XFlowId: trackingData.getFlowId(),
        module: filterModule(module),
        ...info
    }))

    return createLogger({
        level: process.env.LOG_LEVEL,
        format: format.combine(
            custom(),
            format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss:ss'}),
            format.json(),
        ),
        transports: [
            new transports.Console()
        ]
    })
}


function filterModule(module: string) {
    if (!module) {
        return 'Not file info provided'
    }
    const folders = module.split('/')
    return folders[folders.length - 1]
}

export default {
    logger
}
