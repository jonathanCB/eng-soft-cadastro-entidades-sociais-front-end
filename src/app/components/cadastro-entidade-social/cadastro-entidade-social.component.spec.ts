import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEntidadeSocialComponent } from './cadastro-entidade-social.component';

describe('CadastroEntidadeSocialComponent', () => {
  let component: CadastroEntidadeSocialComponent;
  let fixture: ComponentFixture<CadastroEntidadeSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEntidadeSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEntidadeSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
