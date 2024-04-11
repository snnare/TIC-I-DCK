"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producto_route_1 = __importDefault(require("../routes/producto.route"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, resp) => {
            resp.json({
                msg: 'API working'
            });
        });
        this.app.use('/api/productos', producto_route_1.default);
    }
    middlewares() {
        //Parseamos el body
        this.app.use(express_1.default.json()); //Para que el servidor entienda formato JSON
        //CORS
        this.app.use((0, cors_1.default)()); //Para que el servidor acepte peticiones de otros servidores
    }
    //Conectar a la base de datos
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate(); //Probamos la conexion
                console.log('Base de datos conectada'); //Si se conecta, mostramos un mensaje    
            }
            catch (error) { //Si no se conecta, mostramos un mensaje de error
                console.log(error); //Mostramos el error
                console.log('Error al conectarse a la base de datos'); //Mostramos un mensaje de error
            }
        });
    }
}
exports.default = Server;
