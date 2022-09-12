import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http-service/http.service';
import { HttpUsuario } from 'src/app/objetos/HttpUsuario';
import { Usuario } from 'src/app/objetos/Usuario';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';
  usuarioLogado!: Usuario;

  constructor(private http_service: HttpService, private rota: Router) {}

  ngOnInit(): void {}

  entrarClick(): void {
    if (!this.usuario || !this.senha) {
      alert('Verifique se você digitou seu login e senha corretamente.');
    } else {
      this.http_service.selectUsuario(this.usuario, this.senha).subscribe({
        next: (resp: HttpUsuario) => {
          this.usuarioLogado = resp.usuario;
          this.usuarioLogado.token = resp.token;
          this.usuarioLogado.senha = this.senha;
          alert('Login efetuado com sucesso!\n\n' + this.visualizacaoUsuario(this.usuarioLogado));
          localStorage.setItem('USUARIO', JSON.stringify(this.usuarioLogado));
          this.rota.navigate(['/lista-entidades-sociais']);
          //this.rota.navigate(['/heroes', { usuario: this.usuario }]);
        },
        error() {
          alert('Conta não encontrada.');
        },
      });
    }
  }

  visualizacaoUsuario(usuarioLogado: Usuario): string {
    return " Nome: " + usuarioLogado.nome
            + "\n CPF/CNPJ: " + usuarioLogado.cpfCnpj 
            + "\n Email: " + usuarioLogado.email
            + "\n Telefone: " + usuarioLogado.telefone
            + "\n UF: " + usuarioLogado.uf
            + "\n Município: " + usuarioLogado.municipio
            + "\n Logradouro: " + usuarioLogado.logradouro
            + "\n Número: " + usuarioLogado.numero
            + "\n TOKEN: " + usuarioLogado.token
    ;
  }
}
