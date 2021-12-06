import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//firebase config 
export const firebaseConfig = {
  apiKey: "AIzaSyBnLWaRsKVkGb2G8psVX2QOsgmL3d3Xmec",
  authDomain: "todoapp-8354a.firebaseapp.com",
  projectId: "todoapp-8354a",
  storageBucket: "todoapp-8354a.appspot.com",
  messagingSenderId: "453756391094",
  appId: "1:453756391094:web:f8f5d8a11a29a51ed4a017",
  measurementId: "G-K72GLESRL2"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule , AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
