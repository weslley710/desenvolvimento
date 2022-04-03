import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/pessoa';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }
  
  findAll(): Observable<Pessoa[]> {
	return this.http.get<Pessoa[]>(this.baseUrl);	
  }
  
  delete(id: any): Observable<void> {
	const url = `${this.baseUrl}/${id}`;
	return this.http.delete<void>(url);	
  }
  
  create(pessoa: Pessoa): Observable<Pessoa> {
//	const url = `${this.baseUrl}/${id}`;
	return this.http.post<Pessoa>(this.baseUrl, pessoa);	
  }
  
  message(msg: String): void {
	this.snack.open(`${msg}`, 'OK', {
		horizontalPosition: 'end',
		verticalPosition: 'top',
		duration: 4000
	})
  }
}
