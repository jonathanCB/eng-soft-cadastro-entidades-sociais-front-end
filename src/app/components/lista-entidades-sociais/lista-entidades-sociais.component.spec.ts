import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntidadesSociaisComponent } from './lista-entidades-sociais.component';

describe('ListaEntidadesSociaisComponent', () => {
  let component: ListaEntidadesSociaisComponent;
  let fixture: ComponentFixture<ListaEntidadesSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEntidadesSociaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEntidadesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
