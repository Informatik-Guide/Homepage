import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './NavBar/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';

import { ImpressumComponent } from './impressum/impressum.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { KontaktComponent } from './Kontakt/kontakt.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { KurzgesagtComponent } from './kurzgesagt/kurzgesagt.component';
import { CodierungtestComponent } from './Tests/codierungtest/codierungtest.component';
import { IfBedingungtestComponent } from './Tests/if-bedingungtest/if-bedingungtest.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//9.Klasse
import { TabellenkalkComponent } from './Tutorials/9.Klasse/tabellenkalk/tabellenkalk.component';
import { ObjektorientProgrammierungComponent } from './Tutorials/9.Klasse/objektorient.programmierung/objektorient.programmierung.component';
//10.Klasse





//11.Klasse


//1.Graphen
import { GraphenComponent } from './Tutorials/11.Klasse/1.Graphen/graphen/graphen.component';
import { AdjazenzmatrixComponent } from './Tutorials/11.Klasse/1.Graphen/adjazenzmatrix/adjazenzmatrix.component';
import { BreitensucheComponent } from './Tutorials/11.Klasse/1.Graphen/breitensuche/breitensuche.component';
import { DijkstraComponent } from './Tutorials/11.Klasse/1.Graphen/dijkstra/dijkstra.component';

//2.Codierung
import { ZahlensystemeComponent } from './Tutorials/11.Klasse/2.Codierung/zahlensysteme/zahlensysteme.component';
import { SymmetrischeVerschluesselungComponent } from './Tutorials/11.Klasse/2.Codierung/symmetrische-verschluesselung/symmetrische-verschluesselung.component';
import { AsymmetrischeVerschluesselungComponent } from './Tutorials/11.Klasse/2.Codierung/asymmetrische-verschluesselung/asymmetrische-verschluesselung.component';
import { SignaturenComponent } from './Tutorials/11.Klasse/2.Codierung/signaturen/signaturen.component';

//3.Kummunikation
import { InternetComponent } from './Tutorials/11.Klasse/3.Kummunikation/internet/internet.component';
import { SichtenmodellComponent } from './Tutorials/11.Klasse/3.Kummunikation/sichtenmodell/sichtenmodell.component';
import { AdressierungComponent } from './Tutorials/11.Klasse/3.Kummunikation/adressierung/adressierung.component';
import { HTTPComponent } from './Tutorials/11.Klasse/3.Kummunikation/http/http.component';
import { ChancenUndRisikenComponent } from './Tutorials/11.Klasse/3.Kummunikation/chancen-und-risiken/chancen-und-risiken.component';

//4.Ki
import { KuenstlicheInteligenzComponent } from './Tutorials/11.Klasse/4.KI/kuenstliche-inteligenz/kuenstliche-inteligenz.component';
import { AnsaetzeComponent } from './Tutorials/11.Klasse/4.KI/ansaetze/ansaetze.component';
import { Alternative1Component } from './Tutorials/11.Klasse/4.KI/alternative1/alternative1.component';
import { Alternative2Component } from './Tutorials/11.Klasse/4.KI/alternative2/alternative2.component';
import { DasKuenstlicheNeuronComponent } from './Tutorials/11.Klasse/4.KI/das-kuenstliche-neuron/das-kuenstliche-neuron.component';
import { KiImEinsatzComponent } from './Tutorials/11.Klasse/4.KI/ki-im-einsatz/ki-im-einsatz.component';
import { DasNeuronaleNetzComponent } from './Tutorials/11.Klasse/4.KI/das-neuronale-netz/das-neuronale-netz.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    PageNotFoundComponent,
    UeberUnsComponent,
    GraphenComponent,
    ImpressumComponent,
    ManuelszoneComponent,
    GraphenComponent,
    KontaktComponent,
    FeedbackComponent,
    KurzgesagtComponent,
    CodierungtestComponent,
    IfBedingungtestComponent,
    TabellenkalkComponent,
    ObjektorientProgrammierungComponent,
    AdjazenzmatrixComponent,
    BreitensucheComponent,
    DijkstraComponent,
    ZahlensystemeComponent,
    SymmetrischeVerschluesselungComponent,
    AsymmetrischeVerschluesselungComponent,
    SignaturenComponent,
    InternetComponent,
    SichtenmodellComponent,
    AdressierungComponent,
    HTTPComponent,
    ChancenUndRisikenComponent,
    KuenstlicheInteligenzComponent,
    AnsaetzeComponent,
    Alternative1Component,
    Alternative2Component,
    DasKuenstlicheNeuronComponent,
    KiImEinsatzComponent,
    DasNeuronaleNetzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
