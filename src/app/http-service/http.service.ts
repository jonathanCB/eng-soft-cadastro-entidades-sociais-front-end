import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpUsuario } from '../objetos/HttpUsuario';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private url_login = 'http://localhost:3000/usuarios/login';

  constructor(private http: HttpClient) {}

  selectUsuario(usuario: string, senha: string): Observable<HttpUsuario> {
    const login = {
      email: usuario,
      senha: senha
    }
    return this.http.post<HttpUsuario>(this.url_login, login);
  }
}
