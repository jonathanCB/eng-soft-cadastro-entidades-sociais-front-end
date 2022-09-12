import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http-service/http.service';
import { Usuario } from 'src/app/objetos/Usuario';
import { Estado } from 'src/app/objetos/Estado';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {

  novo_usuario!: Usuario;

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
    numero: new FormControl('', [Validators.required])
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

  ngOnInit(): void { }

  gravarUsuario(): void {
    if (!this.formGroup.valid) {
      alert('Verifique se você preencheu todos os campos.');
    } else {
      this.novo_usuario = this.formGroup.value;
      this.http_service.insertUsuario(this.novo_usuario).subscribe((resp) => {
        alert('Usuário cadastrado com sucesso! Faça login.');
        this.rota.navigate(['/']);
      });
    }
  }
}
