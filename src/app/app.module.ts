import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { NotFaundPageComponent } from './componentes/not-faund-page/not-faund-page.component';
import { AngularFireModule } from 'angularfire2';
//import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HistorialService } from './servicios/historial.service';
import { environment} from '../environments/environment';

import { AuthService } from './servicios/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { from } from 'rxjs';
import { AddActualizacionComponent } from '././componentes/add-actualizacion/add-actualizacion.component';
import { HistoriaComponent } from './componentes/historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoComponent,
    NotFaundPageComponent,
    AddActualizacionComponent,
    HistoriaComponent
  ],//se importan modulos
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig, 'casaDigitalLauFap'),
    AngularFirestoreModule


  ],//se importan los servicios
  providers: [AuthService, AuthGuard, FlashMessagesService, HistorialService],
  bootstrap: [AppComponent],

})
export class AppModule { }
