import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// import { initializeKeycloak } from './util/app.keycloak';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './interceptor/jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, KeycloakAngularModule
  ],
  providers: [
    // {
  //   provide: APP_INITIALIZER,
  //   useFactory: initializeKeycloak,
  //   multi: true,
  //   deps: [KeycloakService],
  // },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
