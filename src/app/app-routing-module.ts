import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SearchComponent } from './search/search.component';
import { SeePlaylistComponent } from './see-playlist/see-playlist.component';
import { SeeSongComponent } from './see-song/see-song.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:search', component: SearchComponent },
  { path: 'playlist/:id', component: SeePlaylistComponent },
  { path: 'song/:id', component: SeeSongComponent },
  { path: 'recommendations', component:  RecommendationsComponent },
  { path: 'suggestions', component:  SuggestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}