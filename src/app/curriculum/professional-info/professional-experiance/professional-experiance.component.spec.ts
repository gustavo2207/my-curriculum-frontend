import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperianceComponent } from './professional-experiance.component';

describe('ProfessionalExperianceComponent', () => {
  let component: ProfessionalExperianceComponent;
  let fixture: ComponentFixture<ProfessionalExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExperianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
