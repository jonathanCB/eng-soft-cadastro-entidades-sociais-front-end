import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpUsuario } from '../objetos/HttpUsuario';
import { Usuario } from '../objetos/Usuario';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private url_login = 'http://localhost:3000/usuarios/login';
  private url_cadastrar_usuario = 'http://localhost:3000/usuarios';
  private url_editar_usuario = 'http://localhost:3000/usuarios';
  private url_deletar_usuario = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  selectUsuario(usuario: string, senha: string): Observable<HttpUsuario> {
    const login = {
      email: usuario,
      senha: senha
    }
    return this.http.post<HttpUsuario>(this.url_login, login);
  }

  insertUsuario(usuario: Usuario): Observable<HttpUsuario> {
    const usuario_cadastrar = {
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone,
      cpfCnpj: usuario.cpfCnpj,
      senha: usuario.senha,
      uf: usuario.uf,
      municipio: usuario.municipio,
      logradouro: usuario.logradouro,
      numero: usuario.numero
    }
    return this.http.post<HttpUsuario>(this.url_cadastrar_usuario, usuario_cadastrar);
  }

 updateUsuario(usuario: Usuario): Observable<HttpUsuario> {
    const usuario_editar = {
      nome: usuario.nome,
      telefone: usuario.telefone,
      cpfCnpj: usuario.cpfCnpj,
      senha: usuario.senha,
      uf: usuario.uf,
      municipio: usuario.municipio,
      logradouro: usuario.logradouro,
      numero: usuario.numero
    }
    return this.http.put<HttpUsuario>(this.url_editar_usuario, usuario_editar);
  }

  deleteUsuario(): Observable<HttpUsuario> {
    const url_delete = `${this.url_deletar_usuario}`
    return this.http.delete<HttpUsuario>(url_delete);
  }
}
