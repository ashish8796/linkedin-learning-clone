"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const bodyParser = require('body-parser');
const app = express_1.default();
const fs = require('fs');
// const teachers = require("./utils/data/teachers")
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI || "mongodb+srv://linkdenlearning:linkdenLearningDB@cluster0.ldxhc.mongodb.net/linkdenVideos?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('body-parser').urlencoded({ extended: false }));
const uri = process.env.MONGODB_URI || `mongodb://localhost:27017/linkdenLearning`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set('useFindAndModify', false);
app.use(index_js_1.default);
if (process.env.NODE_ENV == 'production') {
    app.use(express_1.default.static('../../../frontend/build/index.html'));
}
// console.log(teachers)
// let file=fs.readFileSync("./utils/data/teachers");
// console.log(file)
mongoose_1.default.connect(URI, options).then(() => app.listen(PORT, () => console.log(`server lets see hosted on ${PORT}`)));
// app.listen(3000,()=>console.log("connected"))
