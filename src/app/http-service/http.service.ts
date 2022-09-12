import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpUsuario } from '../objetos/HttpUsuario';
import { Usuario } from '../objetos/Usuario';
import { EntidadeSocial } from '../objetos/EntidadeSocial';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  //URLs - Usuário
  private url_login = 'http://localhost:3000/usuarios/login';
  private url_cadastrar_usuario = 'http://localhost:3000/usuarios';
  private url_editar_usuario = 'http://localhost:3000/usuarios';
  private url_deletar_usuario = 'http://localhost:3000/usuarios';

  //URLs - Entidade social
  private url_cadastrar_entidade_social = 'http://localhost:3000/entidades';
  private url_listar_entidades_sociais = 'http://localhost:3000/entidades';
  private url_listar_entidades_sociais_usuario = 'http://localhost:3000/usuarios/entidades-sociais';
  private url_editar_entidade_social = 'http://localhost:3000/entidades';
  private url_deletar_entidade_social = 'http://localhost:3000/entidades';

  constructor(private http: HttpClient) {}

  //Usuários

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

  // Entidades sociais

  selectEntidadesSociais(): Observable<EntidadeSocial[]> {
    return this.http.get<EntidadeSocial[]>(this.url_listar_entidades_sociais);
  }

  insertEntidadeSocial(entidade_social: EntidadeSocial): Observable<HttpUsuario> {
    const entidade_cadastrar = {
      nome: entidade_social.nome,
      email: entidade_social.email,
      objetivos: entidade_social.objetivos,
      telefone: entidade_social.telefone,
      uf: entidade_social.uf,
      municipio: entidade_social.municipio,
      logradouro: entidade_social.logradouro,
      numero: entidade_social.numero
    }
    return this.http.post<HttpUsuario>(this.url_cadastrar_entidade_social, entidade_cadastrar);
  }

  editarEntidadeSocial(entidade_social: EntidadeSocial): Observable<HttpUsuario> {
    const entidade_editada = {
      nome: entidade_social.nome,
      email: entidade_social.email,
      objetivos: entidade_social.objetivos,
      telefone: entidade_social.telefone,
      uf: entidade_social.uf,
      municipio: entidade_social.municipio,
      logradouro: entidade_social.logradouro,
      numero: entidade_social.numero
    }
    const url_editar = `${this.url_editar_entidade_social}/${entidade_social.id}`
    return this.http.put<HttpUsuario>(url_editar, entidade_editada);
  }

  deletarEntidadeSocial(id: number): Observable<HttpUsuario> {
    const url_delete = `${this.url_deletar_entidade_social}/${id}`
    return this.http.delete<HttpUsuario>(url_delete);
  }

  selectEntidadesSociaisUsuario(): Observable<EntidadeSocial[]> {
    return this.http.get<EntidadeSocial[]>(this.url_listar_entidades_sociais_usuario);
  }
}
