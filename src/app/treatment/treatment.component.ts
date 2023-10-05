import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent {
  constructor(private router:Router){}


  prev(){
    this.router.navigate(['/precautions'])
  }
 

}
