import { Component } from '@angular/core';
import {Symptom,UniqueConstraintError,InsertedSuccess ,Read} from '../symptom';
import {Subscription} from 'rxjs';
import { SymptomService } from '../symptom.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
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

   Delete() {
    this.SuccessMsg='';
    this.ErrorMsg='';
    this.Subscription = this.Service.Delete(this.User.disease).subscribe(
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





