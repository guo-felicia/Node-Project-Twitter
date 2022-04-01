import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
const app = express();
app.use(cors());
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
helloController(app);
app.use(express.json());
userController(app);
tuitController(app);
//local
// app.listen(4000);
//Heroku
app.listen(process.env.PORT || 4000);