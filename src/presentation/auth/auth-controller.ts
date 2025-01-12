import { Request, Response } from "express"



export class AuthController {

    createUser = async (req: Request, res: Response) => {
        res.json('Hello from Auth Controller');
    }
}