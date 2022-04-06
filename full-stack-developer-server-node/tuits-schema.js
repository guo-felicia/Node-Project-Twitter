// load mongoose library
import mongoose from 'mongoose';
// create schema
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'}); // which collection name
export default schema; // export schema so it can be used elsewhere