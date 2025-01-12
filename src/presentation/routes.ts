import express, { Router } from 'express';


export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.get('/api/auth', (req, res) => {
            res.send('Hello world from Ruotes')
        })

        return router;
    }
}