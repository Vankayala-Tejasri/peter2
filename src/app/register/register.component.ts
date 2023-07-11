import { Component } from '@angular/core';
import {Register,UniqueConstraintError,InsertedSuccess ,Read} from '../register';
import {Subscription} from 'rxjs';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username='';
    mobilenumber=0;
    aadharnumber= 0;
    age=0;
    email='';
    password='';
    gender='';

  Subscription: Subscription = new Subscription();
  User: Register= {
    username:'',
    mobilenumber:0,
    aadharnumber: 0,
    age: 0,
    email:'',
    password:'',
    gender:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  a = [];

  constructor(private Service:RegisterService) {}
  Insert(form: NgForm) {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(form.value).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          // document.write("inserted succesfully");
          this.SuccessMsg = "**You Have Registered Succesfully**"

        }
        else {
          console.log("Failed");
          alert("Unique constraint error");
          this.ErrorMsg = "User Already Exists"
        }
      }

    )
    form.reset();
  }

}


