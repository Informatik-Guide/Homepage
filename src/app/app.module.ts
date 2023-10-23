import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestTutorialComponent } from './test-tutorial/test-tutorial.component';
import { TestTutorial2Component } from './test-tutorial2/test-tutorial2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    TestTutorialComponent,
    TestTutorial2Component,
    PageNotFoundComponent,
    UeberUnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
