import {Router} from "express";

const messagesRouter = Router();

messagesRouter.post('/', (req, res) => {
    res.send(`This is a post request`);
});

messagesRouter.get('/', (req, res) => {
    res.send(`This is a get request`);
});

export default messagesRouter;