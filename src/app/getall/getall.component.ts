import { Component } from '@angular/core';
import {Register,UniqueConstraintError,InsertedSuccess ,Read} from '../register';
import {Subscription} from 'rxjs';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent {

  // ngOnInit(): void {
  //   this.ReadAll('All');
  // }
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: RegisterService) {}
 email: string = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];

  UpdatedUser: Register = {
   username: '',
  mobilenumber: 0,
   aadharnumber: 0,
   age: 0,
   email:'',
   password:'',
   gender:''
  };
  Results = [];

  Read1(email: string) {
    this.Service.Read(email).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          username:this.a[0],
          mobilenumber:this.a[1],
          aadharnumber:this.a[2],
         age:this.a[3],
         email:this.a[4],
         password:this.a[5],
         gender:this.a[6],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(email: string) {
    this.Service.Read(email).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(email: string, Details: Register) {
    this.Service.Update(email, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(email: string) {
    this.Service.Delete(email).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
  }
}

