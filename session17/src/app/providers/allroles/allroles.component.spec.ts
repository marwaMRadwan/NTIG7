import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrolesComponent } from './allroles.component';

describe('AllrolesComponent', () => {
  let component: AllrolesComponent;
  let fixture: ComponentFixture<AllrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
