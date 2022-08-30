import { Component, OnInit } from '@angular/core';

interface Estado {
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  estados: Estado[] = [];

  estadoSelecionado!: Estado;

  constructor() {
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

  ngOnInit(): void {}
}
