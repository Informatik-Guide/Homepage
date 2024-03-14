import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './NavBar/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { GraphenComponent } from './pages/graphen/graphen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { CodierungComponent } from './Tutorials/11.Klasse/2Codierung/Codierung/codierung.component';
import { IfBedingungComponent } from './Tutorials/if-bedingung/if-bedingung.component';
import { KontaktComponent } from './Kontakt/kontakt.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { KurzgesagtComponent } from './kurzgesagt/kurzgesagt.component';
import { CodierungtestComponent } from './Tests/codierungtest/codierungtest.component';
import { IfBedingungtestComponent } from './Tests/if-bedingungtest/if-bedingungtest.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TabellenkalkComponent } from './tutorials/9.klasse/tabellenkalk/tabellenkalk.component';
import { ObjektorientProgrammierungComponent } from './tutorials/9.klasse/objektorient.programmierung/objektorient.programmierung.component';


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
    CodierungComponent,
    IfBedingungComponent,
    KontaktComponent,
    FeedbackComponent,
    KurzgesagtComponent,
    CodierungtestComponent,
    IfBedingungtestComponent,
    TabellenkalkComponent,
    ObjektorientProgrammierungComponent
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
