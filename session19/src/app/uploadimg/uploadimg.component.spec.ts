import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadimgComponent } from './uploadimg.component';

describe('UploadimgComponent', () => {
  let component: UploadimgComponent;
  let fixture: ComponentFixture<UploadimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
