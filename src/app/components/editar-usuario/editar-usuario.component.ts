import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http-service/http.service';
import { Estado } from 'src/app/objetos/Estado';
import { Usuario } from 'src/app/objetos/Usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  usuario_logado!: Usuario;

  usuario_editado!: Usuario;

  formGroup: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpfCnpj: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    confirma_senha: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    logradouro: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    token: new FormControl('', [Validators.required]),
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
    this.usuario_logado.confirma_senha = ''
    this.formGroup.setValue(this.usuario_logado)
  }

  gravarUsuario(): void {
    this.usuario_editado = this.formGroup.value;
    //this.usuario_editado.senha = this.formGroup.controls['senha'].value;
    this.http_service.updateUsuario(this.usuario_editado).subscribe(() => {
      alert('Alterações gravadas com sucesso!');
      this.usuario_editado.token = this.usuario_logado.token;
      localStorage.setItem('USUARIO', JSON.stringify(this.usuario_editado));
      this.rota.navigate(['/lista-entidades-sociais']);
    });
  }
}
