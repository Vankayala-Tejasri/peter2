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
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';
import {GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import { GetallComponent } from './getall/getall.component';
import { MalariaComponent } from './malaria/malaria.component';
import { CancerComponent } from './cancer/cancer.component';
import { AsthamaComponent } from './asthama/asthama.component';
import { BpComponent } from './bp/bp.component';
import { CovidintroComponent } from './covidintro/covidintro.component';
import { ChickenpoxComponent } from './chickenpox/chickenpox.component';
import { HeartattackComponent } from './heartattack/heartattack.component';
import { DiabitiesComponent } from './diabities/diabities.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { StatsComponent } from './stats/stats.component';
import { CovidtestingComponent } from './covidtesting/covidtesting.component';
import { AnemiaComponent } from './anemia/anemia.component';
import { TermsComponent } from './terms/terms.component';
import { NgChartsModule} from 'ng2-charts';
import { PrecautionsComponent } from './precautions/precautions.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { CovidupdatesComponent } from './covidupdates/covidupdates.component';




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
    AboutComponent,
    GetallComponent,
    MalariaComponent,
    CancerComponent,
    AsthamaComponent,
    BpComponent,
    CovidintroComponent,
    ChickenpoxComponent,
    HeartattackComponent,
    DiabitiesComponent,
    ThyroidComponent,
    StatsComponent,
    CovidtestingComponent,
    AnemiaComponent,
    TermsComponent,
    PrecautionsComponent,
    TreatmentComponent,
    CovidupdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    NgChartsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '169740152556-ap1rlphtpms7d2u3s0thtegu12naqrfs.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
