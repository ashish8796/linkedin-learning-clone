import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import route from './routes/index';
const bodyParser = require('body-parser')

const app: Express = express();

const PORT: string | number = process.env.PORT || 5000;

const URI: string = process.env.MONGODB_URI || "mongodb+srv://linkdenlearning:linkdenLearningDB@cluster0.ldxhc.mongodb.net/linkdenVideos?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('body-parser').urlencoded({ extended: false }));


const uri: string = process.env.MONGODB_URI || `mongodb://localhost:27017/linkdenLearning`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

app.use(route);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('../../../frontend/build/index.html'))
};

mongoose.connect(URI, options).then(() => app.listen(PORT, () => console.log(`server lets see hosted on ${PORT}`)));

// app.listen(3000,()=>console.log("connected"))