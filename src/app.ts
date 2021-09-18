import Application from "koa"
import mongoose from "mongoose"
import middlewares from "./middleware/middlewares"
import router from "./todo/interfaces/routes"


export async function setupApp(shouldSetupDatabase: boolean = false): Promise<Application> {
    const api: Application = new Application();

    await database(shouldSetupDatabase)

    middlewares(api)

    api.use(router.routes())
    api.use(router.allowedMethods())

    return api
}


async function database(shouldSetupDatabase: boolean) {
    try {
        if (shouldSetupDatabase) {
            mongoose.Promise = global.Promise;
            await mongoose.connect('mongodb://127.0.0.1:27017/todosapp', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
            // TODO: logger pending
        } else {
            // TODO: logger pending
        }
    } catch (e) {
        // TODO: logger pending
        throw e
    }
}

async function databaseDisconnect() {
    try {
        await mongoose.connection.close()
        await mongoose.disconnect()
    } catch (e) {
        // TODO: logger pending
        throw e
    }
}

export async function tearDownApp() {
    await databaseDisconnect()
}

