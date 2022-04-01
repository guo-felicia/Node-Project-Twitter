import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";


import {createTuit, deleteTuit, findAllTuits}
    from "./actions/tuits-actions.js";

const TuitsList = () => {
    const tuits = useSelector(
        state => state.tuits);
    
    // create a new state variable with new tuit data
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);
    
    return (
        <>
            {tuit.tuit}
            <div>
                Likes: {tuit.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + 1
                })} className="far fa-thumbs-up ms-2"></i>
            </div>
            
            <i className="fas fa-remove float-end"
               onClick={() => deleteTuit(
                   dispatch, tuit)}></i>
            
            {/*// click Tuit button to invoke createTuit action, pass*/}
            {/*// dispatcher and newTuit to send to server and then to the reducer*/}
            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                    className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75"
                      onChange={(e) =>
                          setNewTuit({
                              ...newTuit,
                              tuit: e.target.value
                          })}></textarea>
        </>
    );
}
export default TuitsList;