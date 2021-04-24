import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMyPlaylistsComponent } from './section-my-playlists.component';

describe('SectionMyPlaylistsComponent', () => {
  let component: SectionMyPlaylistsComponent;
  let fixture: ComponentFixture<SectionMyPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMyPlaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMyPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
