import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEntidadesSociaisUsuarioComponent } from './listar-entidades-sociais-usuario.component';

describe('ListarEntidadesSociaisUsuarioComponent', () => {
  let component: ListarEntidadesSociaisUsuarioComponent;
  let fixture: ComponentFixture<ListarEntidadesSociaisUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEntidadesSociaisUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEntidadesSociaisUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
