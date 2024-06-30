import express , { Request,Response} from 'express';

const UserController = express.Router();

// create user 
UserController.post("/users",(req:Request , res:Response) => {
    res.send("User created : )");
});

export default UserController;