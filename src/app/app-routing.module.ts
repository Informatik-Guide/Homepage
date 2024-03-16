import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { KontaktComponent } from './Kontakt/kontakt.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CodierungtestComponent } from './Tests/codierungtest/codierungtest.component';
import { KurzgesagtComponent } from './kurzgesagt/kurzgesagt.component';
import { IfBedingungtestComponent } from './Tests/if-bedingungtest/if-bedingungtest.component';


//11.Klasse

//1.Graphen
import { GraphenComponent } from './Tutorials/11.Klasse/1.Graphen/graphen/graphen.component';
import { AdjazenzmatrixComponent } from './Tutorials/11.Klasse/1.Graphen/adjazenzmatrix/adjazenzmatrix.component';
import { DijkstraComponent } from './Tutorials/11.Klasse/1.Graphen/dijkstra/dijkstra.component';
import { BreitensucheComponent } from './Tutorials/11.Klasse/1.Graphen/breitensuche/breitensuche.component';
//2.Codierung
import { CodierungComponent } from './Tutorials/11.Klasse/2.Codierung/Codierung/codierung.component';
import { AsymmetrischeVerschluesselungComponent } from './Tutorials/11.Klasse/2.Codierung/asymmetrische-verschluesselung/asymmetrische-verschluesselung.component'; 
import { SignaturenComponent } from './Tutorials/11.Klasse/2.Codierung/signaturen/signaturen.component';
import { SymmetrischeVerschluesselungComponent } from './Tutorials/11.Klasse/2.Codierung/symmetrische-verschluesselung/symmetrische-verschluesselung.component';
import { ZahlensystemeComponent } from './Tutorials/11.Klasse/2.Codierung/zahlensysteme/zahlensysteme.component';
//3.Kumminkation
import { AdressierungComponent } from './Tutorials/11.Klasse/3.Kummunikation/adressierung/adressierung.component';
import { ChancenUndRisikenComponent } from './Tutorials/11.Klasse/3.Kummunikation/chancen-und-risiken/chancen-und-risiken.component';
import { HTTPComponent } from './Tutorials/11.Klasse/3.Kummunikation/http/http.component';
import { InternetComponent } from './Tutorials/11.Klasse/3.Kummunikation/internet/internet.component';
import { SichtenmodellComponent } from './Tutorials/11.Klasse/3.Kummunikation/sichtenmodell/sichtenmodell.component';
//4.KI
import { Alternative1Component } from './Tutorials/11.Klasse/4.KI/alternative1/alternative1.component';
import { Alternative2Component } from './Tutorials/11.Klasse/4.KI/alternative2/alternative2.component';
import { AnsaetzeComponent } from './Tutorials/11.Klasse/4.KI/ansaetze/ansaetze.component';
import { DasKuenstlicheNeuronComponent } from './Tutorials/11.Klasse/4.KI/das-kuenstliche-neuron/das-kuenstliche-neuron.component';
import { KiImEinsatzComponent } from './Tutorials/11.Klasse/4.KI/ki-im-einsatz/ki-im-einsatz.component';
import { KuenstlicheInteligenzComponent } from './Tutorials/11.Klasse/4.KI/kuenstliche-inteligenz/kuenstliche-inteligenz.component';
import { DasNeuronaleNetzComponent } from './Tutorials/11.Klasse/4.KI/das-neuronale-netz/das-neuronale-netz.component';

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


  //11.Klasse

  //1.Graphen
  {path: 'graphen', component: GraphenComponent},
  {path: 'adjazenzmatrix', component: AdjazenzmatrixComponent},
  {path: 'breitensuche', component: BreitensucheComponent},
  {path: 'dijkstra', component: DijkstraComponent},

  //2.Codierung
  {path: 'asymmetrischeverschluesselung', component: AsymmetrischeVerschluesselungComponent},
  {path: 'codierung', component: CodierungComponent},
  {path: 'signaturen', component: SignaturenComponent},
  {path: 'zahlensysteme', component: ZahlensystemeComponent},
  {path: 'symmetrischeVerschluesselung', component: SymmetrischeVerschluesselungComponent},

  //3.Kummunikation
  {path: 'sichtenmodell', component: SichtenmodellComponent},
  {path: 'internet', component: InternetComponent},
  {path: 'http', component: HTTPComponent},
  {path: 'chancenundrisiken', component: ChancenUndRisikenComponent},
  {path: 'adressriung', component: AdressierungComponent},


  //4.Ki
  {path: 'alternative1', component: Alternative1Component},
  {path: 'alternative2', component: Alternative2Component},
  {path: 'ansaetze', component: AnsaetzeComponent},
  {path: 'daskuenstlicheneuron', component: DasKuenstlicheNeuronComponent},
  {path: 'kiimeinsatz', component: KiImEinsatzComponent},
  {path: 'kuenstlicheinteligenz', component: KuenstlicheInteligenzComponent},
  {path: 'dasneuronaleNetz', component: DasNeuronaleNetzComponent},



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
