import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VolunteerPageComponent } from './components/volunteer-page/volunteer-page.component';

const routes: Routes = [
  // Temporarily redirect '' to 'volunteers' instead of 'home'
  // while we work on the volunteer page.
  { path: '', redirectTo: 'volunteers', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'volunteers', component: VolunteerPageComponent }
  // TODO give 404 error to the catch-all path '**'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
