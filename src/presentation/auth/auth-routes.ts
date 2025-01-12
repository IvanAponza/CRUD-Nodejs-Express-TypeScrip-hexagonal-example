import express, { Router } from 'express';
import { AuthController } from './auth-controller';


export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const authController = new AuthController();

        router.get('/users', authController.createUser);

        return router;
    }
}

