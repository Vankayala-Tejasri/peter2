import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule} from '@angular/common/http';
import { CovidComponent } from './covid/covid.component';
import { LoginComponent } from './login/login.component';
import { RetComponent } from './ret/ret.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    ReadComponent,
    CovidComponent,
    LoginComponent,
    RetComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent,
    EditComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
