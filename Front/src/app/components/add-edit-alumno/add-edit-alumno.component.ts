import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Alumno } from '../../interfaces/alumno';
import { AlumnoService } from '../../services/alumno.service';



@Component({
  selector: 'app-add-edit-alumno',
  templateUrl: './add-edit-alumno.component.html',
  styleUrls: ['./add-edit-alumno.component.css']
})
export class AddEditAlumnoComponent implements OnInit {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';


  constructor(
    private fb: FormBuilder,
    private _alumnoService: AlumnoService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      num_cuenta: ['', [Validators.required, Validators.maxLength(10)]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      fecha_nacimiento: ['', Validators.required],
      correo_institucional: ['', [Validators.required, Validators.email]],
      activo: [true]
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.operacion = 'Editar ';
      this.getAlumno(this.id);
    }
  }

  addAlumno() {
    const alumno: Alumno = {
      num_cuenta: this.form.value.num_cuenta,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fecha_nacimiento: this.form.value.fecha_nacimiento,
      correo_institucional: this.form.value.correo_institucional,
      activo: this.form.value.activo
    };

    if (this.id !== 0) {
      // Es editar
      alumno.id = this.id;

      this._alumnoService.actualizarAlumno(this.id, alumno).subscribe(() => {
        this.toastr.success('El alumno ha sido actualizado');
        this.router.navigate(['/']);
      });
    } else {
      this._alumnoService.guardarAlumno(alumno).subscribe(() => {
        this.toastr.success('El alumno ha sido agregado');
        this.router.navigate(['/']);
      });
    }
  }

  getAlumno(id: number) {
    this._alumnoService.obtenerAlumno(id).subscribe((data: Alumno) => {
      this.form.setValue({
        num_cuenta: data.num_cuenta,
        nombre: data.nombre,
        apellido: data.apellido,
        fecha_nacimiento: data.fecha_nacimiento,
        correo_institucional: data.correo_institucional,
        activo: data.activo
      });
    });
  }

}
