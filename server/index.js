import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';
import cors from 'cors';
import serviceRoute from './routes/serviceRoute.js';
import subscriberRoute from './routes/subsriberRoute.js';
import contactRoute from './routes/contactRoute.js';
import faqRoute from "./routes/faqRoute.js";
import excelDownloadRoute from './routes/excelDowloadRoute.js';



dotenv.config();


const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res)=> {
    return res.send("welcome to Nigeria Immigration")
    });

   app.use('/api/services', serviceRoute);
   app.use('/api/subscribers', subscriberRoute);
   app.use('/api/contacts', contactRoute);
   app.use('/api/faqs', faqRoute);
   app.use('/api/exceldownloads', excelDownloadRoute);


    // START THE SERVER
app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on port ${PORT}`);
})          
