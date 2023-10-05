import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent {

  constructor(private router:Router){}


  next(){
    this.router.navigate(['/treatment'])
  }
  prev(){
    this.router.navigate(['/covidtesting'])
  }
}
