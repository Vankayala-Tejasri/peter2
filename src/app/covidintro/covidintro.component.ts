import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-covidintro',
  templateUrl: './covidintro.component.html',
  styleUrls: ['./covidintro.component.css']
})
export class CovidintroComponent {
  constructor(private router:Router){}

  log(){
    this.router.navigate(['/covid'])
  }
  blog(){
    this.router.navigate(['/stats'])
  }
  test(){
    this.router.navigate(['/covidtesting'])
  }
  test1(){
    this.router.navigate(['/precautions'])
  }
  blog2(){
    this.router.navigate(['/treatment'])
  }
  blogs(){
    this.router.navigate(['/covidupdates'])

  }
}
