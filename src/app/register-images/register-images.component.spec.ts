import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterImagesComponent } from './register-images.component';

describe('RegisterImagesComponent', () => {
  let component: RegisterImagesComponent;
  let fixture: ComponentFixture<RegisterImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
