import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RetComponent } from './ret/ret.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'insert',component:InsertComponent},
  {path:'update',component:UpdateComponent},
  {path:'read',component:ReadComponent},
  {path:'delete',component:DeleteComponent},
  {path:'app',component:AppComponent},
  {path:'covid',component:CovidComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:RetComponent},
  {path:'main',component:MainComponent},
  {path:'edit',component:EditComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
 export const myRountings=[
  InsertComponent,
  ReadComponent,
  DeleteComponent,
  UpdateComponent,
  AppComponent,
  CovidComponent

]