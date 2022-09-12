import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/http-service/http.service';
import { EntidadeSocial } from 'src/app/objetos/EntidadeSocial';

@Component({
  selector: 'app-listar-entidades-sociais-usuario',
  templateUrl: './listar-entidades-sociais-usuario.component.html',
  styleUrls: ['./listar-entidades-sociais-usuario.component.scss']
})
export class ListarEntidadesSociaisUsuarioComponent implements OnInit {

  entidades_sociais: EntidadeSocial[] = [];

  entidade_social_editada!: EntidadeSocial;

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    objetivos: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    uf: new FormControl(''),
    municipio: new FormControl(''),
    logradouro: new FormControl(''),
    numero: new FormControl(''),
  });

  constructor(private http_service: HttpService) { }

  ngOnInit(): void {
    this.carregaEntidadesSociais();
  }

  onRowEditInit(entidade_social: EntidadeSocial) {
   this.formGroup.setValue(entidade_social);
  }

  onRowEditSave() {
    this.entidade_social_editada = this.formGroup.value;
    this.http_service.editarEntidadeSocial(this.entidade_social_editada).subscribe(() => {
      alert('Alterações gravadas com sucesso!');
      this.carregaEntidadesSociais();
    })
  }

  onRowDeleteSave(entidade_social: EntidadeSocial) {
    this.http_service.deletarEntidadeSocial(entidade_social.id).subscribe(() => {
      alert('Entidade social excluída com sucesso!');
      this.carregaEntidadesSociais();
    })
  }

  carregaEntidadesSociais(): void {
    this.http_service.selectEntidadesSociaisUsuario().subscribe((entidadesResp: EntidadeSocial[]) => {
      this.entidades_sociais = entidadesResp;
    })
  }
}
