import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesdeatilsComponent } from './employeesdeatils.component';

describe('EmployeesdeatilsComponent', () => {
  let component: EmployeesdeatilsComponent;
  let fixture: ComponentFixture<EmployeesdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesdeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
