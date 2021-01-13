import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCalificarComponent } from './section-calificar.component';

describe('SectionCalificarComponent', () => {
  let component: SectionCalificarComponent;
  let fixture: ComponentFixture<SectionCalificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCalificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
