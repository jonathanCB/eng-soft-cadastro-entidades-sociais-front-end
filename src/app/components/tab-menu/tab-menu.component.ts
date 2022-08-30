import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss'],
})
export class TabMenuComponent implements OnInit {
  @Input() selected_tab!: number;
  items: MenuItem[] = [];

  activeItem!: MenuItem;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Lista de entidades sociais',
        icon: 'pi pi-fw pi-list',
        routerLink: ['/lista-entidades-sociais'],
      },
      {
        label: 'Cadastrar entidade social',
        icon: 'pi pi-fw pi-building',
        routerLink: ['/cadastrar-entidade-social'],
      },
      { label: 'Sobre os desenvolvedores', icon: 'pi pi-fw pi-info-circle' },
      { label: 'Minha entidades sociais', icon: 'pi pi-fw pi-heart' },
    ];

      this.activeItem = this.items[this.selected_tab];  
  }
}
