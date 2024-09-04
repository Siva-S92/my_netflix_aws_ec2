import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import { userRouter } from './routes/userRoute.js';


//config the env variables
dotenv.config();

//server setup
const app = express();
const PORT = 8000;

//using middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const cors_options = {
    origin: "http://localhost:5173",
    credentials: true,
}
// app.options("", cors(cors_options))
app.use(cors(cors_options));

//database Connection
databaseConnection();


//routes
app.get('/', async (req, res) => res.send("Express on vercel with server.js"))
app.use("/api/user", userRouter );





//Listern Server
app.listen(PORT, ()=> {
    console.log("server running on the PORT:", PORT)
})