export interface Alumno {
    id?: number; // El campo es opcional para permitir la creación de un nuevo alumno sin especificar el ID.
    num_cuenta: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    correo_institucional: string; // El correo institucional es opcional
    activo?: boolean; // El estado activo/inactivo es opcional
}
