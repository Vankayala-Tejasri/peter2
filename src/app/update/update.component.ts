import { Component } from '@angular/core';
import {Symptom,UniqueConstraintError,InsertedSuccess ,Read} from '../symptom';
import {Subscription} from 'rxjs';
import { SymptomService } from '../symptom.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  canShowData:boolean=false;
  constructor(private Service:SymptomService) {}
   ngOnInit() {
   }
   Subscription:Subscription=new Subscription();
   User:Symptom ={
    disease:'',
    symptoms:''

   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Read() {
    this.Subscription = this.Service.Read(this.User.disease).subscribe(
          (data)=>{
            if(data){
                this.canShowData=true;
                console.log(data);
                this.a=data.Result[0];
                this.User ={
                  disease:this.a[0],
                  symptoms:this.a[1],
                  
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
       this.Subscription = this.Service.Update(this.User.disease,this.User).subscribe(
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

  }



