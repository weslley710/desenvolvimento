import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private readonly API = 'api/usuarios';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Usuario[]> {
	return this.http.get<Usuario[]>(this.API);	
  }
  
  findById(id: number): Observable<Usuario> {
	const url = `${this.API}/${id}`;
	return this.http.get<Usuario>(url);	
  }
  
  save(usuario: Usuario): Observable<Usuario> {
	return this.http.post<Usuario>(this.API, usuario);	
  }
  
  update(usuario: Usuario): Observable<Usuario> {
	return this.http.put<Usuario>(this.API, usuario);	
  }
  
  delete(id: number): Observable<void> {
	const url = `${this.API}/${id}`;
	return this.http.delete<void>(url);	
  }
}
