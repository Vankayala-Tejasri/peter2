import { Component } from '@angular/core';
import {Symptom,UniqueConstraintError,InsertedSuccess ,Read} from '../symptom';
import {Subscription} from 'rxjs';
import { SymptomService } from '../symptom.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  disease='';
  symptoms='';

  insertUser(item:any){
    this.disease=item.disease;
    console.log(this.disease);
}
  constructor(private Service:SymptomService) {}

  Subscription:Subscription=new Subscription();
   User:Symptom ={
    disease:'',
    symptoms:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Inserted Succesfully"

          }
          else{
            console.log("Failed");
            alert("Unique constraint error");
            this.ErrorMsg="User Already Exists"
          }
        }
        
      )
      form.reset();
    }

}
