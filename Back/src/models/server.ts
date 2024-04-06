import express, { Application, Request, Response } from "express";
import cors from 'cors'

import db from '../connectionDB/connectionDB'
import routerAlumno from '../routes/persona-routes'


class Server{
    private app: Application;
    private port: string;
    

    constructor(){
        this.app = express();
        this.port = '4000'
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Corriendo  en: ',this.port);
        });
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Api OK'
            })
        })

        this.app.use('/api/alumnos', routerAlumno)
    }

    midlewares(){
        this.app.use(express.json())

        this.app.use(cors())
    }

    async dbConnect(){
        try {
            await db.authenticate();
            console.log('BD OK')        
        } catch (error) {  
            console.log(error)
        }
    }

}

export default Server;