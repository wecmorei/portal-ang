import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicaFormComponent } from './fisica-form.component';

describe('FisicaFormComponent', () => {
  let component: FisicaFormComponent;
  let fixture: ComponentFixture<FisicaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisicaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FisicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
