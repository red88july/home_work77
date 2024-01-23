import express from 'express';
import messagesRouter from "./routers/messages";

const app = express();
const port = 8000;

app.use('/messages', messagesRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})