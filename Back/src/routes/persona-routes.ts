import { Router } from "express"; 
import { createAlumno, deleteAlumno, getAlumnoById, getAlumnos, updateAlumno } from '../controllers/persona-controller'


const router = Router();

router.get('/', getAlumnos);
router.get('/:id', getAlumnoById);
router.delete('/:id', deleteAlumno);
router.post('/', createAlumno);
router.put('/:id', updateAlumno);

export default router;
