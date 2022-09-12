import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http-service/http.service';
import { EntidadeSocial } from 'src/app/objetos/EntidadeSocial';

@Component({
  selector: 'app-lista-entidades-sociais',
  templateUrl: './lista-entidades-sociais.component.html',
  styleUrls: ['./lista-entidades-sociais.component.scss']
})
export class ListaEntidadesSociaisComponent implements OnInit {

  entidades_sociais: EntidadeSocial[] = [];

  constructor(private http_service: HttpService) { }

  ngOnInit(): void {
    this.http_service.selectEntidadesSociais().subscribe((entidadesResp: EntidadeSocial[]) => {
      this.entidades_sociais = entidadesResp;
    })
  }

}
