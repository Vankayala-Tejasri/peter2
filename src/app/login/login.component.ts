import { Component } from '@angular/core';
import { Login, UniqueConstraintError, InsertedSuccess, Read } from '../login';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  title = 'google';
  user: any;
  loggedIn: any;

  constructor(private Service: LoginService, private authService: SocialAuthService, private router: Router) { }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }
  data = '';
  SuccessMsg = '';
  ErrorMsg = '';
  a = [];

  Subscription: Subscription = new Subscription();
  User: Login = {
    email: '',
    password: ''
  };







  pass = this.User.password;
  Read() {

    const emailParts: string[] = this.User.email.split('@');
    const username: string = emailParts[0]; // Get the username part
    this.Subscription = this.Service.Read(this.User.email).subscribe(

      (data) => {
        if (data) {
          this.ErrorMsg = '';
          this.SuccessMsg = '';
          console.log(data);
          this.a = data.Result[0];
          if (this.a[1] == this.User.password) {
            this.SuccessMsg = "please";
            this.router.navigate(['/main']);
            console.log("success");
            this.Service.setUsername(username);

          }
          // else if(this.Result==null){
          //   this.ErrorMsg="Please Register"
          // }
          else {
            this.ErrorMsg = "please enter valid credentials";
            console.log("please enter valid credentials");
          }
          // console.log(data.Result);
          // console.log(this.a);


        }
        else {
          console.log("Failed");
          this.ErrorMsg = "please enter valid credentials";

        }
      }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}



