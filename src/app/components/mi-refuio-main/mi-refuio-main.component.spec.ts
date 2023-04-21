import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiRefuioMainComponent } from './mi-refuio-main.component';

describe('MiRefuioMainComponent', () => {
  let component: MiRefuioMainComponent;
  let fixture: ComponentFixture<MiRefuioMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiRefuioMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiRefuioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
