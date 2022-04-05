import posts from "./tuits.js";
import userController from "./user-controller.js";

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.avatar =  "/img/avatar/userav.jpeg";
    newTuit.postedBy = "Felicia";
    newTuit.handle = "feliciagtf"
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) =>
    res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}


const deleteTuit = (req, res) => {
    const tuitId = req.params["tid"]; // get tuit ID
    const tuitIndex = tuits.findIndex((u) => u._id === tuitId); // find index of user 
    tuits.splice(tuitIndex, 1); // delete user
    res.sendStatus(200);
}


const tuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

export default tuitController;
