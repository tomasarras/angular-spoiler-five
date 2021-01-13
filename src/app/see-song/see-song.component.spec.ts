import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSongComponent } from './see-song.component';

describe('SeeSongComponent', () => {
  let component: SeeSongComponent;
  let fixture: ComponentFixture<SeeSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
