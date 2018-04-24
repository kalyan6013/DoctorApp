import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {TabModule} from 'angular-tabs-component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const appRoutes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'adminprofile',component:AdminProfileComponent},
  {path:'signin',component:SigninComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabModule,
     NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule{}
