import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarMobileComponent } from './filtrar-mobile.component';

describe('FiltrarMobileComponent', () => {
  let component: FiltrarMobileComponent;
  let fixture: ComponentFixture<FiltrarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
