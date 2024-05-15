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
//9.Klasse

  //1.Tabellenkalkulationsprogramm
  import { DatenflussdiagrammComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/datenflussdiagramm/datenflussdiagramm.component';
  import { FachbegriffeTabellenkalkulationsprogrammComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/fachbegriffe-tabellenkalkulationsprogramm/fachbegriffe-tabellenkalkulationsprogramm.component';
  import { FunktionenComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/funktionen/funktionen.component';
  import { TabellenkalkulationsprogrammComponent } from './Tutorials/9.Klasse/1.Tabellenkalkulationsprogramm/tabellenkalkulationsprogramm/tabellenkalkulationsprogramm.component';
  //2.Datenbanksysteme
  import { AbfrageComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/abfrage/abfrage.component';
  import { AbfragespracheAmBeispielVonSQLComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/abfragesprache-am-beispiel-von-sql/abfragesprache-am-beispiel-von-sql.component';
  import { DatenmodellComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/datenmodell/datenmodell.component';
  import { FachbegriffeDatenbanksystemeComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/fachbegriffe-datenbanksysteme/fachbegriffe-datenbanksysteme.component';
  import { RelationalesModellComponent } from './Tutorials/9.Klasse/2.Datenbanksysteme/relationales-modell/relationales-modell.component';
  //3.objektorientierten Modellierung und Programmierung
  import { AlgorithmenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/algorithmen/algorithmen.component';
  import { DatentypenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/datentypen/datentypen.component';
  import { FachbegriffeProgrammierungComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/fachbegriffe-programmierung/fachbegriffe-programmierung.component';
  import { GeneralisierungUndSpezialisierungComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/generalisierung-und-spezialisierung/generalisierung-und-spezialisierung.component';
  import { MethodenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/methoden/methoden.component';
  import { ObjektorientierteKonzepteComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/objektorientierte-konzepte/objektorientierte-konzepte.component';
  import { WertzuweisungZurAenderungVonVariablenwertenComponent } from './Tutorials/9.Klasse/3.objektorientierten Modellierung und Programmierung/wertzuweisung-zur-aenderung-von-variablenwerten/wertzuweisung-zur-aenderung-von-variablenwerten.component';



//10.Klasse

  //1.Datenbanksysteme
  import { AbfragespracheAmBeispielVonSql10Component } from './Tutorials/10.Klasse/1.Datenbanken/abfragesprache-am-beispiel-von-sql10/abfragesprache-am-beispiel-von-sql10.component';
  import { FachbegriffeDatenbanksysteme10Component } from './Tutorials/10.Klasse/1.Datenbanken/fachbegriffe-datenbanksysteme10/fachbegriffe-datenbanksysteme10.component';
  import { ObjektorientiertesDatenmodell10Component } from './Tutorials/10.Klasse/1.Datenbanken/objektorientiertes-datenmodell/objektorientiertes-datenmodell.component';
  import { RedundanzUndKonsistenzVonDatenbestaendenComponent } from './Tutorials/10.Klasse/1.Datenbanken/redundanz-und-konsistenz-von-datenbestaenden/redundanz-und-konsistenz-von-datenbestaenden.component';
  import { RelationalesDatenbanksystemComponent } from './Tutorials/10.Klasse/1.Datenbanken/relationales-datenbanksystem/relationales-datenbanksystem.component';
  import { RelationalesModell10Component } from './Tutorials/10.Klasse/1.Datenbanken/relationales-modell10/relationales-modell10.component';;
  //2.Objektorientierte Modellierung und Programmierung
  import { EindimensionalDatenstrukturComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/eindimensional-datenstruktur/eindimensional-datenstruktur.component';
  import { FachbegriffeProgrammierung10Component } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/fachbegriffe-programmierung10/fachbegriffe-programmierung10.component';
  import { InterpretationVonKlassenAlsDatentypenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/interpretation-von-klassen-als-datentypen/interpretation-von-klassen-als-datentypen.component';
  import { KommunikationZwischenObjektenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/kommunikation-zwischen-objekten/kommunikation-zwischen-objekten.component';
  import { PolymorphismusUndUeberschreibenVonMethodenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/polymorphismus-und-ueberschreiben-von-methoden/polymorphismus-und-ueberschreiben-von-methoden.component';
  import { ReferenzenComponent } from './Tutorials/10.Klasse/2.objektorientierten Modellierung und Programmierung/referenzen/referenzen.component';



//11.Klasse

  //1.Graphen
import { GraphenComponent } from './Tutorials/11.Klasse/1.Graphen/graphen/graphen.component';
import { AdjazenzmatrixComponent } from './Tutorials/11.Klasse/1.Graphen/adjazenzmatrix/adjazenzmatrix.component';
import { DijkstraComponent } from './Tutorials/11.Klasse/1.Graphen/dijkstra/dijkstra.component';
import { BreitensucheComponent } from './Tutorials/11.Klasse/1.Graphen/breitensuche/breitensuche.component';
  //2.Codierung
import { CodierungComponent } from './Tutorials/11.Klasse/2.Codierung/codierung/codierung.component';
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

//9.Klasse
//1.Tabellenkalkulationsprogramm
//2.Datenbanksysteme
//3.objektorientierten Modellierung und Programmierung
//10.Klasse
//1.Datenbanksysteme
//2.Objektorientierte Modellierung und Programmierung

//9.Klasse

//1.Tabellenkalkulationsprogramm
{path: 'Tabellenkalkulationsprogramm', component: TabellenkalkulationsprogrammComponent},
{path: 'Datenflussdiagramm', component: DatenflussdiagrammComponent},
{path: 'Funktionen', component: FunktionenComponent},
{path: 'Fachbegriffe-Tabellenkalkulationsprogramm', component: FachbegriffeTabellenkalkulationsprogrammComponent},

//2.Datenbanksysteme
{path: 'objektorientiertes Datenmodell', component: DatenmodellComponent},
{path: 'relationales Modell', component: RelationalesModellComponent},
{path: 'Abfrage', component: AbfrageComponent},
{path: 'Abfragesprache am Beispiel von SQL', component: AbfragespracheAmBeispielVonSQLComponent},
{path: 'Fachbegriffe-Datenbanksysteme', component: FachbegriffeDatenbanksystemeComponent},

//3.objektorientierten Modellierung und Programmierung
{path: 'objektorientierte Konzepte', component: ObjektorientierteKonzepteComponent},
{path: 'Wertzuweisung zur Änderung von Variablenwerten', component: WertzuweisungZurAenderungVonVariablenwertenComponent},
{path: 'Methoden', component: MethodenComponent},
{path: 'Algorithmen', component: AlgorithmenComponent},
{path: 'Datentypen', component: DatentypenComponent},
{path: 'Generalisierung und Spezialisierung', component: GeneralisierungUndSpezialisierungComponent},
{path: 'Fachbegriffe-Programmierung', component: FachbegriffeProgrammierungComponent},

//10.Klasse


//1.Datenbanksysteme
{path: 'objektorientiertes Datenmodell 10', component: ObjektorientiertesDatenmodell10Component},
{path: 'relationales Modell 10', component: RelationalesModell10Component},
{path: 'relationales Datenbanksystem', component: RelationalesDatenbanksystemComponent},
{path: 'Redundanz und Konsistenz von Datenbeständen', component: RedundanzUndKonsistenzVonDatenbestaendenComponent},
{path: 'Abfragesprache am Beispiel von SQL 10', component: AbfragespracheAmBeispielVonSql10Component},
{path: 'Fachbegriffe-Datenbanksysteme10', component: FachbegriffeDatenbanksysteme10Component},

//2.Objektorientierte Modellierung und Programmierung
{path: 'eindimensional Datenstruktur', component: EindimensionalDatenstrukturComponent},
{path: 'Interpretation von Klassen als Datentypen', component: InterpretationVonKlassenAlsDatentypenComponent},
{path: 'Klassenbeziehungen/Referenzen', component: ReferenzenComponent},
{path: 'Kommunikation zwischen Objekten', component: KommunikationZwischenObjektenComponent},
{path: 'Polymorphismus und Überschreiben von Methoden', component: PolymorphismusUndUeberschreibenVonMethodenComponent},
{path: 'Fachbegriffe-Programmierung10', component: FachbegriffeProgrammierung10Component},






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
