import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { FormComponent } from './features/form/form.component';

import { ItemsGeneratorService } from './services/items-generator.service';
import { LoginService } from './services/login.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ItemsGeneratorService,LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
