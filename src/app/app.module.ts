import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavigationComponent } from './Sidebar/navigation.component';
import { TestTutorialComponent } from './pages/test-tutorial/test-tutorial.component';
import { TestTutorial2Component } from './pages/test-tutorial2/test-tutorial2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { GraphenComponent } from './pages/graphen/graphen.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    TestTutorialComponent,
    TestTutorial2Component,
    PageNotFoundComponent,
    UeberUnsComponent,
    GraphenComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
