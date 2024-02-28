import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { CodierungComponent } from './Tutorials/codierung/codierung.component';
import { IfBedingungComponent } from './Tutorials/if-bedingung/if-bedingung.component';
import { KontaktComponent } from './Kontakt/kontakt.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CodierungtestComponent } from './Tests/codierungtest/codierungtest.component';
import { KurzgesagtComponent } from './kurzgesagt/kurzgesagt.component';
import { IfBedingungtestComponent } from './Tests/if-bedingungtest/if-bedingungtest.component';

const routes: Routes = [
  {path: 'start', component: LandingComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  // Main Parts
  {path: 'kontakt', component: KontaktComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'kurzgesagt', component: KurzgesagtComponent},
  // tmp
  {path: 'manuelszone', component: ManuelszoneComponent},
  // Tutorials
  {path: 'if-bedingung', component: IfBedingungComponent},
  {path: 'codierung', component: CodierungComponent},
  // Tests
  {path: 'codierungtest', component: CodierungtestComponent},
  {path: 'ifbedingungtest', component: IfBedingungtestComponent},
  // NotFound
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
