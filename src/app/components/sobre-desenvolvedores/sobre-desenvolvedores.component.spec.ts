import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreDesenvolvedoresComponent } from './sobre-desenvolvedores.component';

describe('SobreDesenvolvedoresComponent', () => {
  let component: SobreDesenvolvedoresComponent;
  let fixture: ComponentFixture<SobreDesenvolvedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreDesenvolvedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreDesenvolvedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
