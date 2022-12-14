import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { environment } from 'src/environments/environment';
//import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
//import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ComponentsModule,HttpClientModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
