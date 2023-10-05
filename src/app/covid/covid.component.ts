import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent {
  constructor(private router:Router){}
  next(){
    this.router.navigate(['covidupdates'])
  }
  prev(){
    this.router.navigate([''])
  }

}
