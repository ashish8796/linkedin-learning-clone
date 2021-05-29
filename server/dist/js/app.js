"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
// const bodyParser = require('body-parser')
const app = express_1.default();
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://linkdenlearning:linkdenLearningDB@cluster0.ldxhc.mongodb.net/linkdenVideos?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.use(cors_1.default());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(require('body-parser').urlencoded({ extended: false }));
const uri = `mongodb://localhost:27017/linkdenLearning`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set('useFindAndModify', false);
app.use(index_1.default);
mongoose_1.default.connect(URI, options).then(() => app.listen(PORT, () => console.log(`server hosted on ${PORT}`)));
// app.listen(3000,()=>console.log("connected"))
