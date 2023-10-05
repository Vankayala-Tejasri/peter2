import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Comps, UniqueConstraintError, InsertedSuccess, Read } from '../comps';
import { Subscription } from 'rxjs';
import { ComponentService } from '../component.service';
import { LoginService } from '../login.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  username: any
  constructor(private Service: ComponentService, private router: Router, private service: LoginService) { }
  ngOnInit() {
    this.service.username$.subscribe(username => {
      this.username = username; // Update the login username
    });

  }
  Subscription: Subscription = new Subscription();
  User: Comps = {
    comp_name: ''
  };
  @Input() data = '';
  a = []
  ErrorMsg="";
  Read() {
    this.Subscription = this.Service.Read(this.User.comp_name).subscribe(
      (data) => {
        if (data) {

          console.log(data);
          this.a = data.Result[0];
            if ( this.User.comp_name==='edit') {
              this.router.navigate(['/edit'])
            }
           else if(this.User.comp_name==='register') {
              this.router.navigate(['/register'])
            }
            else if(this.User.comp_name==='malaria') {
              this.router.navigate(['/malaria'])
            }
            else if(this.User.comp_name==='cancer') {
              this.router.navigate(['/cancer'])
            }
            else if(this.User.comp_name==='asthama') {
              this.router.navigate(['/asthama'])
            }
            else if(this.User.comp_name==='bp') {
              this.router.navigate(['/bp'])
            }
            else if(this.User.comp_name==='covidintro') {
              this.router.navigate(['/covidintro'])
            }
            else if(this.User.comp_name==='chickenpox') {
              this.router.navigate(['/chickenpox'])
            }
            else if(this.User.comp_name==='heartattack') {
              this.router.navigate(['/heartattack'])
            }
            else if(this.User.comp_name==='diabities') {
              this.router.navigate(['/diabities'])
            }
            else if(this.User.comp_name==='thyroid') {
              this.router.navigate(['/thyroid'])
            }
            else if(this.User.comp_name==='anemia') {
              this.router.navigate(['/anemia'])
            }
            else{
              this.ErrorMsg = "No data found";
            }
          console.log(data.Result);
          console.log(this.a);

        }
        else {
          console.log("Failed");
        }
      }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }


  logout() {
    this.router.navigate(['/']);

  }
  // Goplace(query:any){
  //   this.router.navigate(['/component,query'])
  // }

}
