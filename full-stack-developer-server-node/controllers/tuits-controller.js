import tuitsDao from "../tuits-dao.js";
//Remove all usage of the array from the tuits-controller
// and instead import the tuits-dao which will provide
// the functionality of interacting with the tuits collection.

//Add async to all the functions in tuits-controller
const findAllTuits = async (req, res) => {
    //retrieve the tuits using the tuits-dao
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const createTuit = async(req, res) => {
    const newTuit = req.body;
    newTuit.avatar = "/img/avatar/userav.jpeg";
    newTuit.postedBy = {username: "Felicia"};
    newTuit.handle = "feliciagtf";
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    console.log(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    //more functions

    res.json(insertedTuit);
}


const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}


const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}


const tuitController = async(app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

export default tuitController;
