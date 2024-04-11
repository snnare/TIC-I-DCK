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

        //this.app.use(cors())

                // Configuración de CORS Anywhere como middleware
                this.app.use((req, res, next) => {
                    corsProxy.createServer({
                        originWhitelist: [], // Permitir todos los orígenes
                        requireHeader: ['origin', 'x-requested-with'],
                        removeHeaders: ['cookie', 'cookie2']
                    }).handleRequest(req, res);
                });

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
