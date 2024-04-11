import { Component, OnInit} from '@angular/core';

import { Alumno } from '../../interfaces/alumno';
import {AlumnoService} from '../../services/alumno.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit{
  listAlumnos:  Alumno [] = [];
  loading: boolean = false;

  constructor(private _alumnoService: AlumnoService,
    private toastr: ToastrService){
    
  }

  ngOnInit(): void {
    this.getListAlumnos();
  }

  getListAlumnos(){
    this.loading = true;
    this._alumnoService.obtenerTodosAlumnos().subscribe((data: Alumno[]) => {
      this.listAlumnos = data;
      this.loading =false;
    })
  }

  deleteAlumno(id: number){
    this._alumnoService.eliminarAlumno(id).subscribe(() => {
      this.getListAlumnos();
      this.toastr.warning('Alumno eliminado')
    })
  }


}
