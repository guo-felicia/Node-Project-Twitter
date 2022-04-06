import tuitsModel from './tuits-model.js';

export const findAllTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

const tuitsDao = {
    findAllTuits, createTuit, deleteTuit, updateTuit
}
export default tuitsDao;

// module.exports = {
//     findAllTuits, createTuit, deleteTuit, updateTuit
// }

