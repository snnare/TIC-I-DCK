import express, { Application, Request, Response } from "express";
import Alumno from '../models/persona-model'


// Obtiene todos los alumnos
export const getAlumnos = async (req: Request, res: Response) => {
    try {
        const listaDeAlumnos = await Alumno.findAll();
        res.json(listaDeAlumnos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener los alumnos' });
    }
}


// Obtiene un alumno por su ID
export const getAlumnoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const alumno = await Alumno.findByPk(id);
        if (alumno) {
            res.json(alumno);
        } else {
            res.status(404).json({ msg: 'No existe un alumno con el ID proporcionado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener el alumno' });
    }
}

// Elimina un alumno
export const deleteAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const alumno = await Alumno.findByPk(id);
        if (!alumno) {
            res.status(404).json({ msg: 'No existe un alumno con el ID proporcionado' });
        } else {
            await alumno.destroy();
            res.json({ msg: 'Alumno eliminado correctamente' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al eliminar el alumno' });
    }
}


// Inserta un nuevo alumno
export const createAlumno = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Alumno.create(body);
        res.json({ msg: 'Alumno creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al crear el alumno' });
    }
}


// Actualiza un alumno existente
export const updateAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const alumno = await Alumno.findByPk(id);
        if (alumno) {
            if('activo' in body){
                console.log(body.activo)
                await alumno.update({ activo: body.activo});
            }
            await alumno.update(body);
            
            res.json({ msg: 'Alumno actualizado correctamente' });
        } else {
            res.status(404).json({ msg: 'No existe un alumno con el ID proporcionado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al actualizar el alumno' });
    }
}