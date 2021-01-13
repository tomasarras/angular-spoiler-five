import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOpinionesMobileComponent } from './section-opiniones-mobile.component';

describe('SectionOpinionesMobileComponent', () => {
  let component: SectionOpinionesMobileComponent;
  let fixture: ComponentFixture<SectionOpinionesMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOpinionesMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOpinionesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
