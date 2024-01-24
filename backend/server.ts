import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import messagesRouter from "./routers/messages";
import fileDB from "./fileDB";

const app = express();
const port = 8000;
app.use(cors());

app.use(bodyParser.json())
app.use('/messages', messagesRouter);

const run = async () => {
    await fileDB.init();
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        })
};

void run();