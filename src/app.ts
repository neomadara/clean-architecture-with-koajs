import Application from "koa"
import mongoose from "mongoose"
import middlewares from "./middleware/middlewares"
import router from "./todo/routes"


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
            await mongoose.connect('mongodb://localhost/my_database', {
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

