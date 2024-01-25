import {Router} from "express";
import {Message} from "../types";
import fileDB from "../fileDB";
import {imagesUpload} from "../multer";

const messagesRouter = Router();

messagesRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
    try {
        console.log(req.body);
        if (!req.body.message) {
            return res.status(422).send({error: `Message is not to be an empty`});
        }
        const PostMessage: Message = {
            author: req.body.author,
            message: req.body.message,
            image: req.file ? req.file.filename : null,
        }

        const newMessage = await fileDB.addItem(PostMessage);

        res.json(newMessage);
    } catch (e) {
        next(e);
    }
});

messagesRouter.get('/', async (req, res, next) => {
    try {
        const getAllMessages = await fileDB.getItems();
        res.json(getAllMessages);
    } catch (e) {
        next(e);
    }
});

export default messagesRouter;