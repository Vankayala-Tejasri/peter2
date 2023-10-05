import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-covidtesting',
  templateUrl: './covidtesting.component.html',
  styleUrls: ['./covidtesting.component.css']
})
export class CovidtestingComponent {

  constructor(private router:Router){}

  blog(){
    this.router.navigate(['/stats'])
  }
  log(){
    this.router.navigate(['/precautions'])
  }
}
