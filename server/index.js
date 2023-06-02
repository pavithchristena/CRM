import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
import routes from './routes/SalesPipeline.js'

import cors from 'cors';

const port = 4000
const app = express();
dotenv.config();
app.use(express.json());

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("MONGO DB is connected")
    }).catch((err) => {
        throw err;
    })
}



app.use(cors())

app.use("/", routes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connect();
})
app.get('/', (req, res) => {
    res.send('Server is connected!'); // Sending the text message as the response
});

