import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdsComponent } from './birds/birds.component';
import { BirdDetailComponent } from '../app/birds/bird-detail/bird-detail.component';
import { BirdStartComponent } from '../app/birds/bird-start/bird-start.component';
import { BirdsResolverService } from './birds/birds-resolver.service';
import { BirdTeamComponent } from './birds/bird-team/bird-team.component';
import { BirdPhotographerComponent } from './birds/bird-photographer/bird-photographer.component';
import { BirdViaponticaComponent } from './birds/bird-viapontica/bird-viapontica.component';


const routes: Routes = [
  { path: "", redirectTo: "/birds", pathMatch: "full" },
  { path: "https://viapontica-project.github.io/", redirectTo: "/birds", pathMatch: "full" },
  { path: "home", redirectTo: "/birds" },
  { path: 'forUs', component: BirdTeamComponent },
  { path: 'forPictures', component: BirdPhotographerComponent },
  { path: 'forViapontica', component: BirdViaponticaComponent },
  {
    path: "birds", component: BirdsComponent,
    children: [
      { path: "", component: BirdStartComponent },
      { path: ":id", component: BirdDetailComponent, resolve: [BirdsResolverService] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
