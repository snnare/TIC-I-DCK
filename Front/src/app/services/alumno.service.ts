import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Alumno } from '../interfaces/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = "http://172.26.7.45:4000/"
    this.myApiUrl = "api/alumnos/"
  }

  obtenerTodosAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.myAppUrl + this.myApiUrl);
  }

  eliminarAlumno(id: number): Observable<void> {
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
  }

  guardarAlumno(alumno: Alumno): Observable<void> {
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, alumno);
  }


  obtenerAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(this.myAppUrl + this.myApiUrl + id);
  }

  actualizarAlumno(id: number, alumno: Alumno): Observable<void> {
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, alumno);
  }
  
}
