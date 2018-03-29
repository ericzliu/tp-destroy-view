import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ScrComponent} from './scr/scr.component';
import {RouterModule, Routes} from '@angular/router';
import {Scr1Component} from './scr1/scr1.component';
import { ChildComponent } from './scr/child/child.component';

const appRoutes: Routes = [
  {path: 'scr', component: ScrComponent},
  {path: 'scr1', component: Scr1Component},
  {path: '', component: ScrComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ScrComponent,
    Scr1Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
