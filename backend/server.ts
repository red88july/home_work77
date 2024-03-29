import express from 'express';
import cors from 'cors';
import messagesRouter from "./routers/messages";
import fileDB from "./fileDB";

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors());

app.use(express.static('public'));

app.use('/messages', messagesRouter);

const run = async () => {
    await fileDB.init();
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        })
};

void run();