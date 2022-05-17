import express from 'express';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { entryRouter } from './entry/entry.route';

const app = express();

app.use(json({ limit: '30mb' }));
app.use(urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/entries', entryRouter)

// const MONGO_CONNECTION_URL = 'mongodb+srv://lna:qwerqweruiop123@cluster0.hrm0z.mongodb.net/Socials?retryWrites=true&w=majority';
const MONGO_CONNECTION_URL = 'mongodb+srv://nikolay_l:qwerqweruiop123@cluster0.pp51y.mongodb.net/Mecuris?retryWrites=true&w=majority'
const PORT = process.env.port || '5000';

mongoose.connect(MONGO_CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
    .catch((err) => console.log(`Error while connecting to MongoDb: ${err.message} `));

// mongoose.set('useFindAndModify', false)