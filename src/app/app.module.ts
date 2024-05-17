import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './NavBar/navigation.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { KontaktComponent } from './Kontakt/kontakt.component';
import { KurzgesagtComponent } from './kurzgesagt/kurzgesagt.component';
import { CodierungtestComponent } from './Tests/codierungtest/codierungtest.component';
import { IfBedingungtestComponent } from './Tests/if-bedingungtest/if-bedingungtest.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { LandingComponent } from './landing/landing.component';
import { PartenerComponent } from './partener/partener.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//9.Klasse

//1.Tabellenkalkulationsprogramm
import { TabellenkalkulationsprogrammComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/tabellenkalkulationsprogramm/tabellenkalkulationsprogramm.component';
import { DatenflussdiagrammComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/datenflussdiagramm/datenflussdiagramm.component';
import { FunktionenComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/funktionen/funktionen.component';
import { FachbegriffeTabellenkalkulationsprogrammComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/fachbegriffe-tabellenkalkulationsprogramm/fachbegriffe-tabellenkalkulationsprogramm.component';

//2.Datensysteme
import { DatenmodellComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/datenmodell/datenmodell.component';
import { RelationalesModellComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/relationales-modell/relationales-modell.component';
import { AbfrageComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/abfrage/abfrage.component';
import { AbfragespracheAmBeispielVonSQLComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/abfragesprache-am-beispiel-von-sql/abfragesprache-am-beispiel-von-sql.component';
import { FachbegriffeDatenbanksystemeComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/fachbegriffe-datenbanksysteme/fachbegriffe-datenbanksysteme.component';

//3.objektorientierten Modellierung und Programmierung
import { ObjektorientierteKonzepteComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/objektorientierte-konzepte/objektorientierte-konzepte.component';
import { WertzuweisungZurAenderungVonVariablenwertenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/wertzuweisung-zur-aenderung-von-variablenwerten/wertzuweisung-zur-aenderung-von-variablenwerten.component';
import { MethodenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/methoden/methoden.component';
import { AlgorithmenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/algorithmen/algorithmen.component';
import { DatentypenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/datentypen/datentypen.component';
import { GeneralisierungUndSpezialisierungComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/generalisierung-und-spezialisierung/generalisierung-und-spezialisierung.component';
import { FachbegriffeProgrammierungComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/fachbegriffe-programmierung/fachbegriffe-programmierung.component';

//10.Klasse

//1.Datenbanken
import { ObjektorientiertesDatenmodell10Component } from './Tutorials/10.Klasse/1.Datenbanken/objektorientiertes-datenmodell/objektorientiertes-datenmodell.component';
import { RelationalesDatenbanksystemComponent } from './Tutorials/10.Klasse/1.Datenbanken/relationales-datenbanksystem/relationales-datenbanksystem.component';
import { RedundanzUndKonsistenzVonDatenbestaendenComponent } from './Tutorials/10.Klasse/1.Datenbanken/redundanz-und-konsistenz-von-datenbestaenden/redundanz-und-konsistenz-von-datenbestaenden.component';
import { FachbegriffeDatenbanksysteme10Component } from './Tutorials/10.Klasse/1.Datenbanken/fachbegriffe-datenbanksysteme10/fachbegriffe-datenbanksysteme10.component';
import { AbfragespracheAmBeispielVonSql10Component } from './Tutorials/10.Klasse/1.Datenbanken/abfragesprache-am-beispiel-von-sql10/abfragesprache-am-beispiel-von-sql10.component';
import { RelationalesModell10Component } from './Tutorials/10.Klasse/1.Datenbanken/relationales-modell10/relationales-modell10.component';


//2.objektorientierten Modellierung und Programmierung
import { EindimensionalDatenstrukturComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/eindimensional-datenstruktur/eindimensional-datenstruktur.component';
import { InterpretationVonKlassenAlsDatentypenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/interpretation-von-klassen-als-datentypen/interpretation-von-klassen-als-datentypen.component';
import { ReferenzenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/referenzen/referenzen.component';
import { KommunikationZwischenObjektenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/kommunikation-zwischen-objekten/kommunikation-zwischen-objekten.component';
import { PolymorphismusUndUeberschreibenVonMethodenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/polymorphismus-und-ueberschreiben-von-methoden/polymorphismus-und-ueberschreiben-von-methoden.component';
import { FachbegriffeProgrammierung10Component } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/fachbegriffe-programmierung10/fachbegriffe-programmierung10.component';

//11.Klasse


//1.Graphen
import { GraphenComponent } from './Tutorials/11.Klasse/1.Graphen/graphen/graphen.component';
import { AdjazenzmatrixComponent } from './Tutorials/11.Klasse/1.Graphen/adjazenzmatrix/adjazenzmatrix.component';
import { BreitensucheComponent } from './Tutorials/11.Klasse/1.Graphen/breitensuche/breitensuche.component';
import { DijkstraComponent } from './Tutorials/11.Klasse/1.Graphen/dijkstra/dijkstra.component';

//2.Codierung
import { CodierungComponent } from './Tutorials/11.Klasse/2.Codierung/codierung/codierung.component';
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


import { LocationStrategy, HashLocationStrategy } from '@angular/common';




@NgModule({

  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
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
    DasNeuronaleNetzComponent,
    TabellenkalkulationsprogrammComponent,
    DatenflussdiagrammComponent,
    FunktionenComponent,
    FachbegriffeTabellenkalkulationsprogrammComponent,
    DatenmodellComponent,
    RelationalesModellComponent,
    AbfrageComponent,
    AbfragespracheAmBeispielVonSQLComponent,
    FachbegriffeDatenbanksystemeComponent,
    FachbegriffeDatenbanksysteme10Component,
    ObjektorientierteKonzepteComponent,
    WertzuweisungZurAenderungVonVariablenwertenComponent,
    MethodenComponent,
    AlgorithmenComponent,
    DatentypenComponent,
    GeneralisierungUndSpezialisierungComponent,
    FachbegriffeProgrammierungComponent,
    ObjektorientiertesDatenmodell10Component,
    RelationalesDatenbanksystemComponent,
    RedundanzUndKonsistenzVonDatenbestaendenComponent,
    EindimensionalDatenstrukturComponent,
    InterpretationVonKlassenAlsDatentypenComponent,
    ReferenzenComponent,
    KommunikationZwischenObjektenComponent,
    PolymorphismusUndUeberschreibenVonMethodenComponent,
    FachbegriffeProgrammierung10Component,
    AbfragespracheAmBeispielVonSql10Component,
    RelationalesModell10Component,
    CodierungComponent,
    PartenerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
