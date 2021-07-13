import Koa from "koa";

const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello Koa v1';
});

app.listen(3000);
