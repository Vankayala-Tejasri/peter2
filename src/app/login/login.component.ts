import { Component } from '@angular/core';
import {Login,UniqueConstraintError,InsertedSuccess ,Read} from '../login';
import {Subscription} from 'rxjs';
import {LoginService } from '../login.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email='';
  password='';
error:boolean=false;
  
  constructor(private Service:LoginService,private router: Router) {}

  Subscription:Subscription=new Subscription();
   User:Login ={
    email:'',
  password:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   
    Read() {
      this.Subscription = this.Service.Read(this.User.email).subscribe(
        (data)=>{
          if(data){
            
              console.log(data);
              this.a=data.Result[0];
              this.User ={
                email:this.a[0],
                password:this.a[1],
                
               };
              console.log(data.Result);
              console.log(this.a);
              

            }
          else{
              console.log("Failed");
            }
         }
      )
      }
      ngOnDestroy() {
        this.Subscription.unsubscribe();
      }
      
}



