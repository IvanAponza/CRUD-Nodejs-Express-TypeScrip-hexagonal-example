import express from 'express';


export class Server {
    
    public readonly app = express();
    
    constructor(){
        this.app = express();
    }
    
    async start(){
        
    
        this.app.listen(4000, () => {
            console.log(`[Server] running on port http://localhost:4000`);
        })

    }
}