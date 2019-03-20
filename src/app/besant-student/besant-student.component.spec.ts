import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesantStudentComponent } from './besant-student.component';

describe('BesantStudentComponent', () => {
  let component: BesantStudentComponent;
  let fixture: ComponentFixture<BesantStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesantStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesantStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
