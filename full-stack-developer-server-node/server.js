import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
//a9
// mongoose.connect('mongodb://localhost:27017/webdev');
//a9 moongodb atlas
mongoose.connect(`mongodb+srv://feliciagtf:shotwell@cluster0.immtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&authSource=admin`);
const app = express();
app.use(cors());

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
app.use(express.json());
tuitController(app);
// //local
// // app.listen(4000);
//Heroku
app.listen(process.env.PORT || 4000);