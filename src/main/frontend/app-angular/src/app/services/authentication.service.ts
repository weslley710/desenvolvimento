import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
  authenticate(login, senha) {
    return this.httpClient
      .post<any>("http://localhost:8080/authenticate", { login, senha })
      .pipe(
        map(userData => {
          sessionStorage.setItem("login", login);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
    
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("login");
    console.log(!(user === null));
    
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("login");
  }
}