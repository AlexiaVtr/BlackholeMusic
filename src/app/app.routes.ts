import { FormsComponent } from './components/forms/forms.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
// import { AuthGuard } from './services/auth.guard';
import { CarComponent } from './components/car/car.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MusicComponent } from './components/music/music.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';

//    canActivate: [ AuthGuard ]},
const APP_ROUTER: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'car', component: CarComponent},
  { path: 'music', component: MusicComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'search', component: AlbumsComponent},
  { path: 'search/:termino', component: SearcherComponent},
  { path: 'album/:id', component: MusicComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER, {useHash: true});
