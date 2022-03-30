/*
import app from "../../src/App.js";

app.get('/hello', (req, res) => {
    res.send('Life is good!')
});
*/

const helloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
}
export default helloController;
