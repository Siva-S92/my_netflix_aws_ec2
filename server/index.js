import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import { userRouter } from './routes/userRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';


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
// app.get('/', async (req, res) => res.send("Express on vercel with server.js"))
app.use("/api/user", userRouter );

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/dist')))
    app.get("*", async(req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
    })
}





//Listern Server
app.listen(PORT, ()=> {
    console.log("server running on the PORT:", PORT)
})