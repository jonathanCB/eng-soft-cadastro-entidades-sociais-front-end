import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http-service/http.service';
import { EntidadeSocial } from 'src/app/objetos/EntidadeSocial';
import { Estado } from 'src/app/objetos/Estado';
import { Usuario } from 'src/app/objetos/Usuario';

@Component({
  selector: 'app-cadastro-entidade-social',
  templateUrl: './cadastro-entidade-social.component.html',
  styleUrls: ['./cadastro-entidade-social.component.scss'],
})
export class CadastroEntidadeSocialComponent implements OnInit {

  usuario_logado!: Usuario;

  nova_entidade_social!: EntidadeSocial;

  formGroup: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    finalidade: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    logradouro: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
  });

  estados: Estado[] = [];

  constructor(private http_service: HttpService, private rota: Router) {
    this.estados = [
      { nome: 'Espírito Santo', sigla: 'ES' },
      { nome: 'Minas Gerais', sigla: 'MG' },
      { nome: 'Paraná', sigla: 'PR' },
      { nome: 'Rio de Janeiro', sigla: 'RJ' },
      { nome: 'Rio Grande do Sul', sigla: 'RS' },
      { nome: 'Santa Catarina', sigla: 'SC' },
      { nome: 'São Paulo', sigla: 'SP' },
    ];
  }

  ngOnInit(): void {
    this.usuario_logado = JSON.parse(localStorage.getItem('USUARIO') as string);
  }

  gravarEntidade(): void {
    if (!this.formGroup.valid) {
      alert('Verifique se você preencheu todos os campos.');
    } else {
      this.nova_entidade_social = this.formGroup.value;
      this.nova_entidade_social.token_usuario = this.usuario_logado.token
      console.log(this.nova_entidade_social)
      alert('Entidade social gravada com sucesso! Voltando a lista de entidades sociais...');
      this.rota.navigate(['/lista-entidades-sociais']);
    }
  }
}
