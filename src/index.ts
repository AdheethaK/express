import express, { Request , Response} from 'express';
import UserController

const app = express();
const port = 8000;

app.get("/",( req:Request , res:Response) => {
    res.send("Application is running");
})

app.use("/api",UserController)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})