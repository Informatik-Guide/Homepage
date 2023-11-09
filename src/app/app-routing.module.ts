import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { TestTutorialComponent } from './pages/test-tutorial/test-tutorial.component';
import { TestTutorial2Component } from './pages/test-tutorial2/test-tutorial2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { GraphenComponent } from './pages/graphen/graphen.component';

const routes: Routes = [
  {path: 'start', component: LandingComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'tutorial1', component: TestTutorialComponent},
  {path: 'tutorial2', component: TestTutorial2Component},
  {path: 'ueber_uns', component: UeberUnsComponent},
  {path: 'graph', component: GraphenComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
