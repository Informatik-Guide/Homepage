import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TestTutorialComponent } from './test-tutorial/test-tutorial.component';
import { TestTutorial2Component } from './test-tutorial2/test-tutorial2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';

const routes: Routes = [
  {path: 'start', component: LandingComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'tutorial1', component: TestTutorialComponent},
  {path: 'tutorial2', component: TestTutorial2Component},
  {path: 'ueber_uns', component: UeberUnsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
