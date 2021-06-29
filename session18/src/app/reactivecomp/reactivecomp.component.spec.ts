import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivecompComponent } from './reactivecomp.component';

describe('ReactivecompComponent', () => {
  let component: ReactivecompComponent;
  let fixture: ComponentFixture<ReactivecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
