import { Component } from '@angular/core';
import {Register,UniqueConstraintError,InsertedSuccess ,Read} from '../register';
import {Subscription} from 'rxjs';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  canShowData:boolean=false;
  constructor(private Service:RegisterService) {}
   ngOnInit() {
   }
   Subscription:Subscription=new Subscription();
   User:Register ={
    username:'',
    mobilenumber:0,
    aadharnumber: 0,
    age: 0,
    email:'',
    password:'',
    gender:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Read() {
    this.Subscription = this.Service.Read(this.User.email).subscribe(
          (data)=>{
            if(data){
                this.canShowData=true;
                console.log(data);
                this.a=data.Result[0];
                this.User ={
                  username:this.a[0],
                  mobilenumber:this.a[1],
                  aadharnumber:this.a[2],
                  age:this.a[3],
                  email:this.a[4],
                  password:this.a[5],
                  gender:this.a[6],
                  
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
    

  
   Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Update(this.User.email,this.User).subscribe(
        (data)=>{
          if(data){
            console.log(data);
            this.SuccessMsg="Updated Succesfully"

          }
          else{
            console.log("Failed");
            this.ErrorMsg="Failed Updating"
          }
        }
      )
    }

    Delete() {
      this.SuccessMsg='';
      this.ErrorMsg='';
      this.Subscription = this.Service.Delete(this.User.email).subscribe(
             (data)=>{
              if(data){
                console.log(data);
                this.SuccessMsg="Deleted Succesfully"
              }
               else{
                 console.log("Failed");
                 this.ErrorMsg="failed Deleting"
               }
             }
           )
          }
  }
  






