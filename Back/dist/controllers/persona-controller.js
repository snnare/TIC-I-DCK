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
exports.updateAlumno = exports.createAlumno = exports.deleteAlumno = exports.getAlumnoById = exports.getAlumnos = void 0;
const persona_model_1 = __importDefault(require("../models/persona-model"));
// Obtiene todos los alumnos
const getAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaDeAlumnos = yield persona_model_1.default.findAll();
        res.json(listaDeAlumnos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener los alumnos' });
    }
});
exports.getAlumnos = getAlumnos;
// Obtiene un alumno por su ID
const getAlumnoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const alumno = yield persona_model_1.default.findByPk(id);
        if (alumno) {
            res.json(alumno);
        }
        else {
            res.status(404).json({ msg: 'No existe un alumno con el ID proporcionado' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener el alumno' });
    }
});
exports.getAlumnoById = getAlumnoById;
// Elimina un alumno
const deleteAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const alumno = yield persona_model_1.default.findByPk(id);
        if (!alumno) {
            res.status(404).json({ msg: 'No existe un alumno con el ID proporcionado' });
        }
        else {
            yield alumno.destroy();
            res.json({ msg: 'Alumno eliminado correctamente' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al eliminar el alumno' });
    }
});
exports.deleteAlumno = deleteAlumno;
// Inserta un nuevo alumno
const createAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield persona_model_1.default.create(body);
        res.json({ msg: 'Alumno creado correctamente' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al crear el alumno' });
    }
});
exports.createAlumno = createAlumno;
// Actualiza un alumno existente
const updateAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const alumno = yield persona_model_1.default.findByPk(id);
        if (alumno) {
            if ('activo' in body) {
                console.log(body.activo);
                yield alumno.update({ activo: body.activo });
            }
            yield alumno.update(body);
            res.json({ msg: 'Alumno actualizado correctamente' });
        }
        else {
            res.status(404).json({ msg: 'No existe un alumno con el ID proporcionado' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al actualizar el alumno' });
    }
});
exports.updateAlumno = updateAlumno;
