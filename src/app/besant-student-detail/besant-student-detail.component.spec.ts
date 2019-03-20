import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesantStudentDetailComponent } from './besant-student-detail.component';

describe('BesantStudentDetailComponent', () => {
  let component: BesantStudentDetailComponent;
  let fixture: ComponentFixture<BesantStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesantStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesantStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
