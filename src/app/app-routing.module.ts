import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { GraphenComponent } from './pages/graphen/graphen.component';

const routes: Routes = [
  {path: 'start', component: LandingComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'ueber_uns', component: UeberUnsComponent},
  {path: 'manuelszone', component: ManuelszoneComponent},
  {path: 'graphen', component: GraphenComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
