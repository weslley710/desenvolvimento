import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../services/usuario.service'

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

//  private readonly API = 'api/authenticate';

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) {}
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
  authenticate(login, senha) {
    return this.httpClient
      .post<any>("http://localhost:8080/authenticate", { login, senha })
      .pipe(
        map(userLogged => {
          sessionStorage.setItem("login", login);
          let tokenStr = "Bearer " + userLogged.token;
          sessionStorage.setItem("token", tokenStr);
          // Seta usuario logado na sessao
          
          this.usuarioService.findByLogin(login).subscribe((usuario) => {
			sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
		  })

          return userLogged;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("login");
    console.log(!(user === null));
    
    return !(user === null);
  }
  
  userLogged(): Usuario {
	var usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
	return usuarioLogado;
  }

  logOut() {
    sessionStorage.removeItem("login");
  }
}