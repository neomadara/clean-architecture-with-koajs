import Koa from "koa";
import config from "./datastore/mongo";
import * as mongoose from '@south-paw/koa-mongoose';

const app = new Koa();

app.use(mongoose(config))

app.use(ctx => {
    ctx.body = 'Hello Koa v1';
});

app.listen(3000);
