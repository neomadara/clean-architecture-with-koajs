const config = {
    host: 'localhost',
    port: '27017',
    user: '',
    pass: '',
    db: 'test',
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        poolSize: 10,
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
    }
};

export default config
